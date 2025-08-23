// pages/auth/login.jsx
import { AuthForms } from "@/components/auth-forms"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          <AuthForms mode="login" />
          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}