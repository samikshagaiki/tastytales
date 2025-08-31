"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Quiz() {
  const questions = [
    {
      q: "What’s your go-to comfort food?",
      options: ["Pizza 🍕", "Salad 🥗", "Ice Cream 🍨", "Curry 🍛"],
    },
    {
      q: "How do you like to cook?",
      options: ["Quick & Easy", "Healthy & Fresh", "Sweet & Fun", "Spicy & Bold"],
    },
    {
      q: "Pick your dream dinner setting:",
      options: ["Friends Hangout", "Beach Picnic", "Birthday Party", "Family Feast"],
    },
  ]

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (option) => {
    setAnswers([...answers, option])
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setStep("result")
    }
  }

  const getResult = () => {
    if (answers.includes("Pizza 🍕")) return "You’re a Pizza! 🍕 Fun, social & everyone loves you."
    if (answers.includes("Salad 🥗")) return "You’re a Salad! 🥗 Fresh, healthy, and balanced."
    if (answers.includes("Ice Cream 🍨")) return "You’re Ice Cream! 🍨 Sweet, creative & joyful."
    if (answers.includes("Curry 🍛")) return "You’re a Curry! 🍛 Spicy, bold, and full of flavor."
    return "You’re a unique mix of flavors – just like a Chef’s Special!"
  }

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800">
      <Navigation />

      <main className="max-w-2xl mx-auto py-20 px-6 text-center">
        {step !== "result" ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{questions[step].q}</h2>
            <div className="flex flex-col gap-4">
              {questions[step].options.map((opt) => (
                <Button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">🎉 Your Food Personality</h2>
            <p className="text-lg mb-8">{getResult()}</p>
            <Button onClick={() => { setStep(0); setAnswers([]); }} className="bg-orange-600 text-white">
              Take Again
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
