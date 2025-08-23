import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Welcome to Recipe Book</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover delicious recipes from our community of passionate home cooks. Share your culinary creations and
            explore new flavors from around the world.
          </p>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="/placeholder-jnkuh.png"
              alt="Beautiful food spread with various dishes"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/recipes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                View Recipes
              </Button>
            </Link>
            <Link href="/add-recipe">
              <Button size="lg" className="w-full sm:w-auto">
                Add Recipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why Choose Recipe Book?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <CardTitle>Discover New Recipes</CardTitle>
                <CardDescription>
                  Browse through hundreds of recipes from cuisines around the world. Find your next favorite dish with
                  our easy-to-use search.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <CardTitle>Share Your Creations</CardTitle>
                <CardDescription>
                  Upload your own recipes with photos and detailed instructions. Help others recreate your delicious
                  dishes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Smart Search</CardTitle>
                <CardDescription>
                  Find recipes by ingredients, cuisine type, or cooking time. Our smart search helps you discover
                  exactly what you're craving.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to Start Cooking?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of food lovers and start exploring amazing recipes today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recipes">
              <Button size="lg" variant="outline">
                Browse Recipes
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
