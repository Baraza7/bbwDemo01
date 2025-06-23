import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase with error handling
let app: FirebaseApp | null;
let auth: Auth | null;
let db: Firestore | null;
let storage: FirebaseStorage | null;

// Prevent re-initialization on hot reloads
if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    // Set to null if initialization fails
    app = null;
    auth = null;
    db = null;
    storage = null;
  }
} else {
  app = getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { app, auth, db, storage };
