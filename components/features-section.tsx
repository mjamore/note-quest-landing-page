import { Music, Guitar, Brain, Smartphone, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Learn Music Notes",
    description: "Interactive piano keyboard teaches kids to recognize and identify musical notes from C to high C.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Guitar,
    title: "Discover Instruments",
    description: "Explore 6 different instruments including Piano, Guitar, Drums, Saxophone, Violin, and Flute.",
    color: "from-orange-400 to-yellow-400",
  },
  {
    icon: Brain,
    title: "Quiz Mode",
    description: "Test listening skills with fun quizzes. Earn stars and track progress with instant feedback.",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: Smartphone,
    title: "Rotate to Learn",
    description: "Landscape mode for interactive learning, portrait mode for quizzes. A unique way to play!",
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No login required, no data collection, no ads. Just safe, educational fun for your kids.",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Sparkles,
    title: "Designed for Kids",
    description: "Colorful, intuitive interface perfect for ages 4 and up. No reading required to play!",
    color: "from-amber-400 to-orange-400",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything Kids Need to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Love Music
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NoteQuest combines learning and play to develop your child&apos;s musical ear in a safe, ad-free environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-border/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
