import { Button } from "@/components/ui/button";
import { Apple, Star } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-10 bg-pink-400 rounded-full rotate-45 opacity-40" />
        <div className="absolute top-20 right-20 w-3 h-8 bg-yellow-400 rounded-full -rotate-12 opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-3 h-8 bg-blue-400 rounded-full rotate-30 opacity-40" />
        <div className="absolute bottom-10 right-1/3 w-4 h-10 bg-green-400 rounded-full -rotate-45 opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">Loved by kids everywhere</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Start Your Child&apos;s <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Musical Journey</span> Today
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download NoteQuest free on iOS and watch your child discover the joy of music through interactive learning and fun quizzes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-0 rounded-full px-10 py-7 text-xl font-semibold shadow-xl shadow-pink-500/30 transition-all hover:scale-105"
            >
              <a href="https://apps.apple.com/app/notequest-learn-perfect-pitch/id6775383859" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Apple className="w-7 h-7" />
                Download on the App Store
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Free download • No account needed • Ages 4+</p>
        </div>
      </div>
    </section>
  );
}
