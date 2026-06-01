"use client"

import Image from "next/image"
import { useState } from "react"

const screenshots = [
  {
    id: 1,
    title: "Learning Music Notes",
    description: "Interactive piano keyboard in landscape mode",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0598-lrpqiHy2FcwaM6M7rw4uiCdb9KopqA.jpeg",
    isLandscape: true,
    category: "notes",
  },
  {
    id: 2,
    title: "Learning Instruments",
    description: "Explore 6 different musical instruments",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0599-YgIBF8rJ56OWsUr5689T4BP7XQ9YFk.jpeg",
    isLandscape: true,
    category: "instruments",
  },
  {
    id: 3,
    title: "Music Notes Quiz",
    description: "Test note recognition with visual piano feedback",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0604-y8KNv5W0OtVOWt0rXBTQQL06mECgq0.jpeg",
    isLandscape: false,
    category: "notes",
  },
  {
    id: 4,
    title: "Instruments Quiz",
    description: "Identify instruments by their unique sounds",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0610-dvqONtE1V2487V3piHHNE6uheS0VGx.jpeg",
    isLandscape: false,
    category: "instruments",
  },
  {
    id: 5,
    title: "Correct Answer",
    description: "Instant feedback with colorful indicators",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0611-wv6xXejIxppR6ALTP4UMFz8wiygs32.jpeg",
    isLandscape: false,
    category: "instruments",
  },
  {
    id: 6,
    title: "Wrong Answer Feedback",
    description: "Learn from mistakes with clear visual cues",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0612-GvZvbEyBm8SApGeAeqPHSgLczzak6O.jpeg",
    isLandscape: false,
    category: "instruments",
  },
  {
    id: 7,
    title: "Quiz Complete",
    description: "Celebrate achievements with star ratings",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0608-JqqRnTyLqOk49Lu5E2ygVtPLUCast6.jpeg",
    isLandscape: false,
    category: "notes",
  },
  {
    id: 8,
    title: "Sound Required",
    description: "Friendly reminder to enable device sound",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0602-SDxrhdSLYnpXidkOXujCE94jCyz5aK.jpeg",
    isLandscape: false,
    category: "notes",
  },
]

export function ScreenshotsSection() {
  const [filter, setFilter] = useState<"all" | "notes" | "instruments">("all")

  const filteredScreenshots = screenshots.filter(
    (s) => filter === "all" || s.category === filter
  )

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              NoteQuest
            </span>{" "}
            in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore the colorful, kid-friendly interface designed to make music learning irresistible.
          </p>

          {/* Filter buttons */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
            {[
              { value: "all", label: "All" },
              { value: "notes", label: "Music Notes" },
              { value: "instruments", label: "Instruments" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as typeof filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === option.value
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScreenshots.map((screenshot) => (
            <div
              key={screenshot.id}
              className={`group ${screenshot.isLandscape ? "sm:col-span-2" : ""}`}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-border/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                <div className={`${screenshot.isLandscape ? 'rounded-xl' : 'rounded-2xl max-w-[200px] mx-auto'} overflow-hidden border-4 border-gray-900 bg-gray-900`}>
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    width={screenshot.isLandscape ? 500 : 200}
                    height={screenshot.isLandscape ? 280 : 430}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-foreground">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
