// Dummy recipe data
export const dummyRecipes = [
  {
    id: "1",
    title: "Classic Spaghetti Carbonara",
    description:
      "A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper. Simple yet incredibly delicious.",
    image: "/spaghetti-carbonara.png",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
      "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, Pecorino Romano, Parmesan, and plenty of black pepper.",
      "Reserve 1 cup of pasta cooking water, then drain the pasta.",
      "Add hot pasta to the skillet with pancetta and toss to combine.",
      "Remove from heat and quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper.",
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    tags: ["pasta", "italian", "dinner", "comfort food"],
    authorId: "demo",
    authorName: "Chef Mario",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Homemade Chocolate Chip Cookies",
    description: "Soft, chewy chocolate chip cookies that are perfect for any occasion. A family favorite recipe.",
    image: "/baking-cookies.png",
    ingredients: [
      "2¼ cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "¾ cup granulated sugar",
      "¾ cup brown sugar, packed",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips",
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, cream together butter and both sugars until light and fluffy.",
      "Beat in eggs one at a time, then add vanilla extract.",
      "Gradually mix in the flour mixture until just combined.",
      "Stir in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes or until golden brown.",
      "Cool on baking sheet for 2 minutes before transferring to wire rack.",
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    tags: ["dessert", "cookies", "baking", "sweet"],
    authorId: "demo",
    authorName: "Baker Sarah",
    createdAt: "2024-01-14T14:30:00Z",
  },
  {
    id: "3",
    title: "Thai Green Curry",
    description:
      "Aromatic and spicy Thai green curry with vegetables and your choice of protein. Bursting with authentic flavors.",
    image: "/placeholder-xsj4y.png",
    ingredients: [
      "2 tbsp green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 Thai eggplant, cubed",
      "100g green beans, trimmed",
      "1 red bell pepper, sliced",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "Thai basil leaves",
      "2 kaffir lime leaves",
      "1 red chili, sliced",
    ],
    instructions: [
      "Heat 2 tbsp of thick coconut milk in a wok over medium heat.",
      "Add green curry paste and fry until fragrant, about 2 minutes.",
      "Add chicken and cook until nearly done, about 5 minutes.",
      "Pour in remaining coconut milk and bring to a gentle simmer.",
      "Add eggplant, green beans, and bell pepper. Cook for 5-7 minutes.",
      "Season with fish sauce and palm sugar.",
      "Add kaffir lime leaves and Thai basil.",
      "Garnish with sliced chili and serve with jasmine rice.",
    ],
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Thai",
    tags: ["curry", "thai", "spicy", "coconut", "dinner"],
    authorId: "demo",
    authorName: "Chef Siriporn",
    createdAt: "2024-01-13T18:45:00Z",
  },
  {
    id: "4",
    title: "Classic Caesar Salad",
    description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan cheese, and crunchy croutons.",
    image: "/placeholder-hkc1g.png",
    ingredients: [
      "2 heads romaine lettuce, chopped",
      "½ cup Parmesan cheese, grated",
      "2 cups croutons",
      "2 cloves garlic, minced",
      "2 anchovy fillets",
      "1 egg yolk",
      "2 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "⅓ cup olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly, then chop into bite-sized pieces.",
      "For dressing, mash garlic and anchovies into a paste.",
      "Whisk in egg yolk, lemon juice, and Dijon mustard.",
      "Slowly drizzle in olive oil while whisking to emulsify.",
      "Season with salt and pepper.",
      "Toss lettuce with dressing until well coated.",
      "Top with Parmesan cheese and croutons.",
      "Serve immediately.",
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    cuisine: "American",
    tags: ["salad", "vegetarian", "lunch", "healthy"],
    authorId: "demo",
    authorName: "Chef Julia",
    createdAt: "2024-01-12T12:15:00Z",
  },
  {
    id: "5",
    title: "Beef Tacos with Homemade Salsa",
    description: "Flavorful ground beef tacos with fresh homemade salsa and all your favorite toppings.",
    image: "/placeholder-otdav.png",
    ingredients: [
      "1 lb ground beef",
      "1 packet taco seasoning",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 cup shredded cheese",
      "2 tomatoes, diced",
      "1 onion, diced",
      "2 jalapeños, minced",
      "¼ cup cilantro, chopped",
      "2 limes, juiced",
      "Sour cream for serving",
    ],
    instructions: [
      "Brown ground beef in a large skillet over medium-high heat.",
      "Drain excess fat and add taco seasoning with ¼ cup water.",
      "Simmer for 5 minutes until thickened.",
      "For salsa, combine diced tomatoes, half the onion, jalapeños, cilantro, and lime juice.",
      "Season salsa with salt and let sit for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill shells with beef, lettuce, cheese, and remaining onion.",
      "Serve with salsa and sour cream.",
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mexican",
    tags: ["tacos", "mexican", "beef", "dinner", "family-friendly"],
    authorId: "demo",
    authorName: "Chef Carlos",
    createdAt: "2024-01-11T19:20:00Z",
  },
  {
    id: "6",
    title: "Lemon Garlic Salmon",
    description: "Pan-seared salmon with a bright lemon garlic butter sauce. Light, healthy, and full of flavor.",
    image: "/placeholder-nkv37.png",
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "3 cloves garlic, minced",
      "2 lemons, juiced and zested",
      "4 tbsp butter",
      "2 tbsp olive oil",
      "2 tbsp fresh parsley, chopped",
      "Salt and pepper to taste",
      "1 tsp paprika",
    ],
    instructions: [
      "Season salmon fillets with salt, pepper, and paprika.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Cook salmon skin-side up for 4-5 minutes until golden.",
      "Flip and cook for another 3-4 minutes.",
      "Remove salmon and set aside.",
      "In the same pan, add butter and garlic, cook for 1 minute.",
      "Add lemon juice and zest, simmer for 2 minutes.",
      "Return salmon to pan, spoon sauce over fish.",
      "Garnish with parsley and serve immediately.",
    ],
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    tags: ["salmon", "healthy", "seafood", "dinner", "quick"],
    authorId: "demo",
    authorName: "Chef Elena",
    createdAt: "2024-01-10T17:30:00Z",
  },
]

// Recipe management functions
export function getRecipes() {
  if (typeof window === "undefined") return dummyRecipes

  const stored = localStorage.getItem("recipe-book-recipes")
  if (stored) {
    return JSON.parse(stored)
  }

  // Initialize with dummy data
  localStorage.setItem("recipe-book-recipes", JSON.stringify(dummyRecipes))
  return dummyRecipes
}

export function getRecipeById(id) {
  const recipes = getRecipes()
  return recipes.find((recipe) => recipe.id === id) || null
}

export function saveRecipe(recipe) {
  const recipes = getRecipes()
  const existingIndex = recipes.findIndex((r) => r.id === recipe.id)

  if (existingIndex >= 0) {
    recipes[existingIndex] = recipe
  } else {
    recipes.push(recipe)
  }

  localStorage.setItem("recipe-book-recipes", JSON.stringify(recipes))
}

export function searchRecipes(query) {
  const recipes = getRecipes()
  const lowercaseQuery = query.toLowerCase()

  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowercaseQuery)) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      recipe.cuisine.toLowerCase().includes(lowercaseQuery),
  )
}