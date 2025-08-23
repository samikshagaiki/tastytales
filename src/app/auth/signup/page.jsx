import { AuthForms } from "@/components/auth-forms"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          <AuthForms mode="signup" />
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}