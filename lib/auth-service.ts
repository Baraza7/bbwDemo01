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

export interface AuthResult {
  success: boolean
  user?: User
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

// Auth service class to handle Firebase operations
export class AuthService {
  private auth: any
  private db: any

  constructor(auth: any, db: any) {
    this.auth = auth
    this.db = db
  }

  // Check if Firebase is ready
  isReady(): boolean {
    return !!(this.auth && this.db)
  }

  // Register new user
  async registerUser(email: string, password: string, displayName: string): Promise<AuthResult> {
    if (!this.isReady()) {
      return { success: false, error: "Firebase not initialized" }
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
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

      await setDoc(doc(this.db, "users", user.uid), userData)

      return { success: true, user }
    } catch (error: any) {
      console.error("Registration error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Sign in user
  async signInUser(email: string, password: string): Promise<AuthResult> {
    if (!this.isReady()) {
      return { success: false, error: "Firebase not initialized" }
    }

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password)
      const user = userCredential.user

      await setDoc(doc(this.db, "users", user.uid), { lastLoginAt: new Date().toISOString() }, { merge: true })

      return { success: true, user }
    } catch (error: any) {
      console.error("Sign in error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Sign out user
  async signOutUser(): Promise<AuthResult> {
    if (!this.isReady()) {
      return { success: false, error: "Firebase not initialized" }
    }

    try {
      await signOut(this.auth)
      return { success: true }
    } catch (error: any) {
      console.error("Sign out error:", error)
      return { success: false, error: "Failed to sign out" }
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<AuthResult> {
    if (!this.isReady()) {
      return { success: false, error: "Firebase not initialized" }
    }

    try {
      await sendPasswordResetEmail(this.auth, email)
      return { success: true }
    } catch (error: any) {
      console.error("Password reset error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Get user data
  async getUserData(uid: string): Promise<UserData | null> {
    if (!this.isReady()) {
      return null
    }

    try {
      const userDoc = await getDoc(doc(this.db, "users", uid))
      if (userDoc.exists()) {
        return userDoc.data() as UserData
      }
      return null
    } catch (error) {
      console.error("Error getting user data:", error)
      return null
    }
  }

  // Listen to auth state changes
  onAuthStateChanged(callback: (user: User | null) => void) {
    if (!this.isReady()) {
      callback(null)
      return () => {}
    }

    return onAuthStateChanged(this.auth, callback)
  }

  // Helper method for error messages
  private getErrorMessage(errorCode: string): string {
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
}
