import { AuthForms } from "@/components/auth-forms"
import { Navigation } from "@/components/navigation"

import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Sticky navbar stays visible */}
      <Navigation />
      {/* Safe space below sticky nav */}
      <main className="flex items-center justify-center px-4 pt-24 py-12 md:py-16">
        <section
          className="
            w-full max-w-md space-y-6
            rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur-md
            shadow-xl shadow-orange-900/5 ring-1 ring-stone-200/70
            transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/10
            auth-fade p-6 md:p-8
          "
          aria-label="Create your account"
        >
          <AuthForms mode="signup" />
          <p className="text-center text-sm text-stone-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-orange-600 hover:text-orange-700 hover:underline">
              Sign in here
            </Link>
          </p>
        </section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-orange-500/70" aria-hidden="true" />
    </div>
  )
}
