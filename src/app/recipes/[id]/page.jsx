"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getRecipeById } from "@/lib/recipes"
import Image from "next/image"
import Link from "next/link"

export default function RecipeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = params.id
    const foundRecipe = getRecipeById(id)
    setRecipe(foundRecipe)
    setLoading(false)

    if (!foundRecipe) {
      // Recipe not found, redirect after a short delay
      setTimeout(() => router.push("/recipes"), 2000)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto py-8 px-4 text-center">
          <h1 className="font-serif text-2xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-4">The recipe you're looking for doesn't exist or has been removed.</p>
          <Link href="/recipes">
            <Button>Back to Recipes</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/recipes">
            <Button variant="ghost" className="pl-0">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Recipes
            </Button>
          </Link>
        </div>

        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{recipe.difficulty}</Badge>
            <Badge variant="outline">{recipe.cuisine}</Badge>
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-serif text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{recipe.description}</p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              by {recipe.authorName}
            </span>
            <span>•</span>
            <span>{new Date(recipe.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="mb-8">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
          </div>
        </div>

        {/* Recipe Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Prep Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{recipe.prepTime} min</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cook Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{recipe.cookTime} min</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Servings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{recipe.servings}</p>
            </CardContent>
          </Card>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/recipes">
            <Button variant="outline" size="lg">
              Browse More Recipes
            </Button>
          </Link>
          <Link href="/add-recipe">
            <Button size="lg">Share Your Recipe</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}