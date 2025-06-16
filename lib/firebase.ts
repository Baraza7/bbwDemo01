import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase with error handling
let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  
  // Initialize services
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} catch (error) {
  console.warn("Firebase initialization failed:", error);
  // Create mock objects for development
  auth = null;
  db = null;
  storage = null;
}

export { app, auth, db, storage };
