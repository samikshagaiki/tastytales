"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Bookmark } from "lucide-react"
import { Calendar } from "lucide-react"
import {Users} from "lucide-react"
import Link from "next/link"
import { Utensils, Share2, Search } from "lucide-react"

export default function HomePage() {
  // --- Slideshow backgrounds ---
  const backgrounds = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ]
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000) // rotate every 5s
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800">
      <Navigation />

      {/* Hero Section with rotating background */}
      <section className="relative py-20 px-4 text-center" aria-labelledby="hero-title">
        <div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden ring-1 ring-amber-200 shadow-xl transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(12, 15, 18, 0.5), rgba(12, 15, 18, 0.5)), url('${backgrounds[bgIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* decorative top bar */}
          <div className="h-2 w-full bg-orange-600" />

          <div className="px-6 md:px-10 py-16 md:py-24">
            <h1
              id="hero-title"
              className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 animate-[fadeIn_900ms_ease-out]"
            >
              Discover Your Next <br />
              <span className="text-orange-400">Favorite Recipe</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-[fadeInUp_900ms_ease-out_150ms_both]">
              Explore global flavors, share your cooking journey, and find dishes that match your vibe.
            </p>

            {/* Search bar inside hero */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-[90%] max-w-lg mx-auto shadow-lg mb-8">
              <Search className="text-gray-500 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search 10,000+ recipes..."
                className="outline-none flex-1 bg-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recipes">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20">
                  <Utensils className="mr-2 h-4 w-4" aria-hidden="true" />
                  Explore Recipes
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-slate-800 border-slate-300 hover:border-orange-600 hover:text-orange-700 transition-colors"
                >
                  <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                  Share Your Recipe
                </Button>
              </Link>
            </div>
          </div>

          {/* decorative bottom bar */}
          <div className="h-2 w-full bg-orange-600" />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-6  bg-amber-50">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Why Join FlavorBook?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-amber-50 p-6 rounded-2xl shadow-md text-center">
            <Bookmark className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Save Favorites</h3>
            <p>Bookmark recipes you love and create your own personalized collection.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl shadow-md text-center">
            <Calendar className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Plan Meals</h3>
            <p>Create weekly meal plans that keep your cooking exciting & organized.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl shadow-md text-center">
            <Users className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Join Community</h3>
            <p>Connect with food lovers, share tips, and celebrate your passion for cooking.</p>
          </div>
        </div>
      </section>

      {/* Quiz CTA Section */}
      <section className="bg-orange-50 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Find Your Food Personality</h2>
        <p className="mb-6 text-slate-600">
          Take a quick quiz and discover which dish matches your vibe 🍕🥗🍩
        </p>
        <Link href="/quiz">
          <Button className="bg-orange-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-orange-700">
            Start Quiz
          </Button>
        </Link>
      </section>

      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
