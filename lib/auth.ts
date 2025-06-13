"use client"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  type User,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "./firebase"

export interface UserData {
  uid: string
  email: string
  displayName: string
  role: "admin" | "user"
  createdAt: string
  lastLoginAt: string
}

export interface AuthResult {
  success: boolean
  error?: string
  user?: User
}

// Register new user
export async function registerUser(email: string, password: string, displayName: string): Promise<AuthResult> {
  try {
    if (!auth || !db) {
      throw new Error("Firebase not initialized")
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update user profile
    await updateProfile(user, { displayName })

    // Create user document in Firestore
    const userData: UserData = {
      uid: user.uid,
      email: user.email!,
      displayName,
      role: "user", // Default role
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    }

    await setDoc(doc(db, "users", user.uid), userData)

    return { success: true, user }
  } catch (error: any) {
    console.error("Registration error:", error)
    return { success: false, error: getErrorMessage(error) }
  }
}

// Sign in user
export async function signInUser(email: string, password: string): Promise<AuthResult> {
  try {
    if (!auth || !db) {
      throw new Error("Firebase not initialized")
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update last login time
    await setDoc(doc(db, "users", user.uid), { lastLoginAt: new Date().toISOString() }, { merge: true })

    return { success: true, user }
  } catch (error: any) {
    console.error("Sign in error:", error)
    return { success: false, error: getErrorMessage(error) }
  }
}

// Sign out user
export async function signOutUser(): Promise<AuthResult> {
  try {
    if (!auth) {
      throw new Error("Firebase not initialized")
    }

    await signOut(auth)
    return { success: true }
  } catch (error: any) {
    console.error("Sign out error:", error)
    return { success: false, error: getErrorMessage(error) }
  }
}

// Send password reset email
export async function resetPassword(email: string): Promise<AuthResult> {
  try {
    if (!auth) {
      throw new Error("Firebase not initialized")
    }

    await sendPasswordResetEmail(auth, email)
    return { success: true }
  } catch (error: any) {
    console.error("Password reset error:", error)
    return { success: false, error: getErrorMessage(error) }
  }
}

// Get user data from Firestore
export async function getUserData(uid: string): Promise<UserData | null> {
  try {
    if (!db) {
      throw new Error("Firestore not initialized")
    }

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

// Auth state change listener
export async function onAuthStateChange(callback: (user: User | null) => void) {
  try {
    if (!auth) {
      throw new Error("Firebase Auth not initialized")
    }

    return onAuthStateChanged(auth, callback)
  } catch (error) {
    console.error("Error setting up auth state listener:", error)
    return () => {} // Return empty unsubscribe function
  }
}

// Helper function to get user-friendly error messages
function getErrorMessage(error: any): string {
  switch (error.code) {
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
      return error.message || "An error occurred. Please try again."
  }
}
