"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { saveRecipe } from "@/lib/recipes"
import { useToast } from "@/hooks/use-toast"

const cuisineOptions = [
  "Italian",
  "Mexican",
  "Thai",
  "American",
  "Mediterranean",
  "Indian",
  "Chinese",
  "French",
  "Japanese",
  "Other",
]

const difficultyOptions = ["Easy", "Medium", "Hard"]

const commonTags = [
  "vegetarian",
  "vegan",
  "gluten-free",
  "dairy-free",
  "healthy",
  "quick",
  "comfort food",
  "dessert",
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "appetizer",
  "main course",
  "side dish",
  "soup",
  "salad",
  "pasta",
  "rice",
  "chicken",
  "beef",
  "pork",
  "seafood",
  "baking",
  "grilling",
  "one-pot",
  "meal prep",
]

export function RecipeForm() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    cuisine: "",
  })

  const [ingredients, setIngredients] = useState([""])
  const [instructions, setInstructions] = useState([""])
  const [selectedTags, setSelectedTags] = useState([])
  const [customTag, setCustomTag] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addIngredient = () => {
    setIngredients([...ingredients, ""])
  }

  const updateIngredient = (index, value) => {
    const updated = [...ingredients]
    updated[index] = value
    setIngredients(updated)
  }

  const removeIngredient = (index) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index))
    }
  }

  const addInstruction = () => {
    setInstructions([...instructions, ""])
  }

  const updateInstruction = (index, value) => {
    const updated = [...instructions]
    updated[index] = value
    setInstructions(updated)
  }

  const removeInstruction = (index) => {
    if (instructions.length > 1) {
      setInstructions(instructions.filter((_, i) => i !== index))
    }
  }

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim().toLowerCase())) {
      setSelectedTags([...selectedTags, customTag.trim().toLowerCase()])
      setCustomTag("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) return

    setIsSubmitting(true)

    try {
      // Validate form
      const filteredIngredients = ingredients.filter((ing) => ing.trim())
      const filteredInstructions = instructions.filter((inst) => inst.trim())

      if (
        !formData.title.trim() ||
        !formData.description.trim() ||
        filteredIngredients.length === 0 ||
        filteredInstructions.length === 0 ||
        !formData.prepTime ||
        !formData.cookTime ||
        !formData.servings ||
        !formData.difficulty ||
        !formData.cuisine
      ) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }

      const newRecipe = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        image: `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(formData.title)}`,
        ingredients: filteredIngredients,
        instructions: filteredInstructions,
        prepTime: Number.parseInt(formData.prepTime),
        cookTime: Number.parseInt(formData.cookTime),
        servings: Number.parseInt(formData.servings),
        difficulty: formData.difficulty,
        cuisine: formData.cuisine,
        tags: selectedTags,
        authorId: user.id,
        authorName: user.name,
        createdAt: new Date().toISOString(),
      }

      saveRecipe(newRecipe)

      toast({
        title: "Recipe Added!",
        description: "Your recipe has been successfully added to the collection.",
      })

      router.push(`/recipes/${newRecipe.id}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save recipe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Recipe Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Enter a descriptive title for your recipe"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your recipe - what makes it special?"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="prepTime">Prep Time (min) *</Label>
              <Input
                id="prepTime"
                type="number"
                min="0"
                value={formData.prepTime}
                onChange={(e) => handleInputChange("prepTime", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="cookTime">Cook Time (min) *</Label>
              <Input
                id="cookTime"
                type="number"
                min="0"
                value={formData.cookTime}
                onChange={(e) => handleInputChange("cookTime", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="servings">Servings *</Label>
              <Input
                id="servings"
                type="number"
                min="1"
                value={formData.servings}
                onChange={(e) => handleInputChange("servings", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="difficulty">Difficulty *</Label>
              <Select value={formData.difficulty} onValueChange={(value) => handleInputChange("difficulty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyOptions.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="cuisine">Cuisine *</Label>
            <Select value={formData.cuisine} onValueChange={(value) => handleInputChange("cuisine", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select cuisine type" />
              </SelectTrigger>
              <SelectContent>
                {cuisineOptions.map((cuisine) => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Ingredients */}
      <Card>
        <CardHeader>
          <CardTitle>Ingredients *</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={ingredient}
                onChange={(e) => updateIngredient(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                className="flex-1"
              />
              {ingredients.length > 1 && (
                <Button type="button" variant="outline" size="sm" onClick={() => removeIngredient(index)}>
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addIngredient}>
            Add Ingredient
          </Button>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Instructions *</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-1">
                {index + 1}
              </div>
              <Textarea
                value={instruction}
                onChange={(e) => updateInstruction(index, e.target.value)}
                placeholder={`Step ${index + 1} instructions`}
                rows={2}
                className="flex-1"
              />
              {instructions.length > 1 && (
                <Button type="button" variant="outline" size="sm" onClick={() => removeInstruction(index)}>
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addInstruction}>
            Add Step
          </Button>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Selected Tags</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="default" className="cursor-pointer" onClick={() => removeTag(tag)}>
                  {tag} ×
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Common Tags</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {commonTags
                .filter((tag) => !selectedTags.includes(tag))
                .slice(0, 15)
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => addTag(tag)}
                  >
                    {tag} +
                  </Badge>
                ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              placeholder="Add custom tag"
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCustomTag())}
            />
            <Button type="button" variant="outline" onClick={addCustomTag}>
              Add Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submit */}
      <div className="flex gap-4">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Saving Recipe..." : "Save Recipe"}
        </Button>
        <Button type="button" variant="outline" size="lg" onClick={() => router.push("/recipes")}>
          Cancel
        </Button>
      </div>
    </form>
  )
}