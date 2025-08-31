import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Heart, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-orange-500 text-slate-800 border-t border-amber-200" aria-labelledby="site-footer">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + blurb */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-amber-300 bg-orange-600 text-white">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 id="site-footer" className="font-serif text-xl font-semibold">
                Recipe Book
              </h3>
            </div>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Discover, create, and share amazing recipes with our passionate community of home cooks.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                aria-label="Instagram"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-amber-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                aria-label="Facebook"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-amber-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                aria-label="Twitter"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-amber-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                aria-label="YouTube"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-amber-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Recipes */}
          <div>
            <h4 className="text-base font-semibold mb-3">Recipes</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Lunch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Dinner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-base font-semibold mb-3">Community</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Featured Chefs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Submit Recipe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-700">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
