"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { User } from "firebase/auth"
import { onAuthStateChange, getUserData, type UserData } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  userData: UserData | null
  loading: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  isAdmin: false,
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribe: (() => void) | undefined

    const setupAuthListener = async () => {
      try {
        unsubscribe = await onAuthStateChange(async (user) => {
          setUser(user)

          if (user) {
            const data = await getUserData(user.uid)
            setUserData(data)
          } else {
            setUserData(null)
          }

          setLoading(false)
        })
      } catch (error) {
        console.error("Failed to setup auth listener:", error)
        setLoading(false)
      }
    }

    setupAuthListener()

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  const isAdmin = userData?.role === "admin"

  const value = {
    user,
    userData,
    loading,
    isAdmin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
