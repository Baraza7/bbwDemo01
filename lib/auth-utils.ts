"use client"

import { getAuth, getDb } from "./firebase"

export interface AuthResult {
  success: boolean
  user?: any
  error?: string
}

export interface UserData {
  uid: string
  email: string
  displayName: string
  role: "admin" | "user"
  createdAt: string
  lastLoginAt: string
}

// Sign in user
export async function signInUser(email: string, password: string): Promise<AuthResult> {
  try {
    const auth = await getAuth()
    if (!auth) {
      return { success: false, error: "Authentication service not available" }
    }

    const { signInWithEmailAndPassword } = await import("firebase/auth")
    const { doc, setDoc } = await import("firebase/firestore")

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    const db = await getDb()
    if (db) {
      await setDoc(doc(db, "users", user.uid), { lastLoginAt: new Date().toISOString() }, { merge: true })
    }

    return { success: true, user }
  } catch (error: any) {
    console.error("Sign in error:", error)
    return { success: false, error: getErrorMessage(error.code) }
  }
}

// Register user
export async function registerUser(email: string, password: string, displayName: string): Promise<AuthResult> {
  try {
    const auth = await getAuth()
    if (!auth) {
      return { success: false, error: "Authentication service not available" }
    }

    const { createUserWithEmailAndPassword, updateProfile } = await import("firebase/auth")
    const { doc, setDoc } = await import("firebase/firestore")

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await updateProfile(user, { displayName })

    const userData: UserData = {
      uid: user.uid,
      email: user.email || "",
      displayName,
      role: "user",
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    }

    const db = await getDb()
    if (db) {
      await setDoc(doc(db, "users", user.uid), userData)
    }

    return { success: true, user }
  } catch (error: any) {
    console.error("Registration error:", error)
    return { success: false, error: getErrorMessage(error.code) }
  }
}

// Sign out user
export async function signOutUser(): Promise<AuthResult> {
  try {
    const auth = await getAuth()
    if (!auth) {
      return { success: false, error: "Authentication service not available" }
    }

    const { signOut } = await import("firebase/auth")
    await signOut(auth)
    return { success: true }
  } catch (error: any) {
    console.error("Sign out error:", error)
    return { success: false, error: "Failed to sign out" }
  }
}

// Reset password
export async function resetPassword(email: string): Promise<AuthResult> {
  try {
    const auth = await getAuth()
    if (!auth) {
      return { success: false, error: "Authentication service not available" }
    }

    const { sendPasswordResetEmail } = await import("firebase/auth")
    await sendPasswordResetEmail(auth, email)
    return { success: true }
  } catch (error: any) {
    console.error("Password reset error:", error)
    return { success: false, error: getErrorMessage(error.code) }
  }
}

// Get user data
export async function getUserData(uid: string): Promise<UserData | null> {
  try {
    const db = await getDb()
    if (!db) {
      return null
    }

    const { doc, getDoc } = await import("firebase/firestore")
    const userDoc = await getDoc(doc(db, "users", uid))

    if (userDoc.exists()) {
      return userDoc.data() as UserData
    }
    return null
  } catch (error) {
    console.error("Error getting user data:", error)
    return null
  }
}

// Auth state listener
export async function onAuthStateChanged(callback: (user: any) => void) {
  try {
    const auth = await getAuth()
    if (!auth) {
      callback(null)
      return () => {}
    }

    const { onAuthStateChanged: firebaseOnAuthStateChanged } = await import("firebase/auth")
    return firebaseOnAuthStateChanged(auth, callback)
  } catch (error) {
    console.error("Auth state listener error:", error)
    callback(null)
    return () => {}
  }
}

// Helper function for error messages
function getErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case "auth/user-not-found":
      return "No account found with this email address."
    case "auth/wrong-password":
      return "Incorrect password."
    case "auth/email-already-in-use":
      return "An account with this email already exists."
    case "auth/weak-password":
      return "Password should be at least 6 characters."
    case "auth/invalid-email":
      return "Invalid email address."
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later."
    case "auth/network-request-failed":
      return "Network error. Please check your connection."
    default:
      return "An error occurred. Please try again."
  }
}
