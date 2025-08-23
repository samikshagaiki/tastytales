"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { RecipeCard } from "@/components/recipe-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getRecipes, searchRecipes } from "@/lib/recipes"

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  useEffect(() => {
    const allRecipes = getRecipes()
    setRecipes(allRecipes)
    setFilteredRecipes(allRecipes)
  }, [])

  useEffect(() => {
    let filtered = recipes

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchRecipes(searchQuery)
    }

    // Apply cuisine filter
    if (selectedCuisine) {
      filtered = filtered.filter((recipe) => recipe.cuisine === selectedCuisine)
    }

    // Apply difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter((recipe) => recipe.difficulty === selectedDifficulty)
    }

    setFilteredRecipes(filtered)
  }, [searchQuery, selectedCuisine, selectedDifficulty, recipes])

  const cuisines = Array.from(new Set(recipes.map((recipe) => recipe.cuisine)))
  const difficulties = ["Easy", "Medium", "Hard"]

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCuisine(null)
    setSelectedDifficulty(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Recipe Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing recipes from our community of passionate cooks. Find your next favorite dish!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search recipes, ingredients, or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>

          {/* Filter Tags */}
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium mb-2">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <Badge
                    key={cuisine}
                    variant={selectedCuisine === cuisine ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine)}
                  >
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Badge
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredRecipes.length} of {recipes.length} recipes
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find more recipes.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}