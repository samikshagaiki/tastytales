"use client"
import { useAuth } from "@/components/auth-provider"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Manage your recipes and account settings</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>What would you like to do today?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/add-recipe">
                  <Button className="w-full">Add New Recipe</Button>
                </Link>
                <Link href="/my-recipes">
                  <Button variant="outline" className="w-full bg-transparent">
                    View My Recipes
                  </Button>
                </Link>
                <Link href="/recipes">
                  <Button variant="outline" className="w-full bg-transparent">
                    Browse All Recipes
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-muted-foreground">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <Button variant="destructive" onClick={logout} className="w-full">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
