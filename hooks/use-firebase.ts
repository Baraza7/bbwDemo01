"use client"

import { useEffect, useState } from "react"
import { auth, db } from "@/lib/firebase"

export function useFirebase() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check if Firebase is properly initialized
    if (auth && db) {
      setIsInitialized(true)
    }
  }, [])

  return {
    auth,
    db,
    isInitialized,
  }
}
