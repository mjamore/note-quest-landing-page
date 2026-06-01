import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100">
      {/* Decorative confetti elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-8 bg-pink-400 rounded-full rotate-45 opacity-60" />
        <div className="absolute top-32 left-1/4 w-2 h-6 bg-yellow-400 rounded-full -rotate-12 opacity-60" />
        <div className="absolute top-40 right-1/4 w-3 h-8 bg-blue-400 rounded-full rotate-30 opacity-60" />
        <div className="absolute top-28 right-20 w-2 h-6 bg-green-400 rounded-full -rotate-45 opacity-60" />
        <div className="absolute bottom-40 left-20 w-3 h-8 bg-purple-400 rounded-full rotate-12 opacity-60" />
        <div className="absolute bottom-32 right-32 w-2 h-6 bg-orange-400 rounded-full -rotate-30 opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-sm font-medium text-foreground">Ages 4+</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight text-balance">
              Teach Your Kids{" "}
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Music by Ear
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              NoteQuest makes learning music fun! Kids discover notes and instruments through interactive sounds, then test their skills with exciting quizzes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-pink-500/30 transition-all hover:scale-105">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Apple className="w-6 h-6" />
                  Download Free on iOS
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">No account required • Privacy-focused</p>
            </div>
          </div>

          {/* Right content - App screenshots */}
          <div className="flex-1 relative">
            <div className="relative flex items-center justify-center">
              {/* Main phone mockup */}
              <div className="relative z-20 transform hover:scale-105 transition-transform duration-300">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-500/20 border-8 border-gray-900 bg-gray-900">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0595-MWpT8hM8t6X7SK75BwFAccvwAaiwg5.jpeg"
                    alt="NoteQuest app home screen"
                    width={280}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Secondary phone - left */}
              <div className="absolute -left-8 md:-left-16 top-12 z-10 transform -rotate-6 opacity-80 hidden sm:block">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-900 bg-gray-900">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0604-y8KNv5W0OtVOWt0rXBTQQL06mECgq0.jpeg"
                    alt="Music Notes Quiz"
                    width={180}
                    height={380}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Secondary phone - right */}
              <div className="absolute -right-8 md:-right-16 top-12 z-10 transform rotate-6 opacity-80 hidden sm:block">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-900 bg-gray-900">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0611-wv6xXejIxppR6ALTP4UMFz8wiygs32.jpeg"
                    alt="Instruments Quiz"
                    width={180}
                    height={380}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
