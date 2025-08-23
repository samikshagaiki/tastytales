'use client'
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session in localStorage
    const savedUser = localStorage.getItem("recipe-book-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)
    // Simulate API call - in real app, this would be an actual authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user exists in localStorage users
    const users = JSON.parse(localStorage.getItem("recipe-book-users") || "[]")
    const existingUser = users.find((u) => u.email === email && u.password === password)

    if (existingUser) {
      const userData = { id: existingUser.id, email: existingUser.email, name: existingUser.name }
      setUser(userData)
      localStorage.setItem("recipe-book-user", JSON.stringify(userData))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signup = async (email, password, name) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("recipe-book-users") || "[]")
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      setIsLoading(false)
      return false
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
    }
    users.push(newUser)
    localStorage.setItem("recipe-book-users", JSON.stringify(users))

    const userData = { id: newUser.id, email: newUser.email, name: newUser.name }
    setUser(userData)
    localStorage.setItem("recipe-book-user", JSON.stringify(userData))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("recipe-book-user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
