"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { RecipeCard } from "@/components/recipe-card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { getRecipes } from "@/lib/recipes"
import Link from "next/link"

export default function MyRecipesPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [myRecipes, setMyRecipes] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router, mounted])

  useEffect(() => {
    if (user) {
      const allRecipes = getRecipes()
      const userRecipes = allRecipes.filter((recipe) => recipe.authorId === user.id)
      setMyRecipes(userRecipes)
    }
  }, [user])

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-2">My Recipes</h1>
            <p className="text-lg text-muted-foreground">
              {myRecipes.length} recipe{myRecipes.length !== 1 ? "s" : ""} shared
            </p>
          </div>
          <Link href="/add-recipe">
            <Button size="lg">Add New Recipe</Button>
          </Link>
        </div>
        {myRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">No recipes yet</h3>
            <p className="text-muted-foreground mb-6">Start sharing your culinary creations with the community!</p>
            <Link href="/add-recipe">
              <Button size="lg">Add Your First Recipe</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
