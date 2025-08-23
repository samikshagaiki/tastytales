"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { RecipeForm } from "@/components/recipe-form"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AddRecipePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.push("/auth/signup")
    }
  }, [user, isLoading, router, mounted])

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto py-8 px-4 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Sign In Required</CardTitle>
              <CardDescription>You need to be signed in to add recipes to our collection.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/auth/signup">
                <Button className="w-full">Create Account</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="w-full bg-transparent">
                  Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Add New Recipe</h1>
          <p className="text-lg text-muted-foreground">
            Share your culinary creation with our community of food lovers.
          </p>
        </div>
        <RecipeForm />
      </div>
    </div>
  )
}