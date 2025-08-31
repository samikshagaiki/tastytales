import { AuthForms } from "@/components/auth-forms"
import Link from "next/link" // Import Link component
import { Navigation } from "@/components/navigation"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Sticky navbar stays visible; no change to component */}
      <Navigation />

      {/* Add top padding so content doesn't sit under sticky nav */}
      <div className="flex items-center justify-center px-4 py-12 md:py-16 pt-24">
        <div
          className="
            w-full max-w-md space-y-6
            rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur-md
            shadow-xl shadow-orange-900/5 ring-1 ring-stone-200/70
            transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/10
            auth-fade
            p-6 md:p-8
          "
        >
          {/* inner spacing */}
          <AuthForms mode="login" />
          <p className="text-center text-sm text-stone-600">
            {"Don't have an account? "}
            <Link href="/auth/signup" className="font-medium text-orange-600 hover:text-orange-700 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>

      {/* Decorative bottom border to echo brand color */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-orange-500/70" aria-hidden="true" />
    </div>
  )
}
