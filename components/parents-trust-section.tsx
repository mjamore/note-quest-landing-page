import { ShieldCheck, Eye, Baby, Lock } from "lucide-react"

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "No Data Collection",
    description: "We never collect, store, or share any personal information. Your child&apos;s privacy is our priority.",
  },
  {
    icon: Eye,
    title: "No Account Required",
    description: "Jump straight into learning! No email, no sign-up, no passwords to remember.",
  },
  {
    icon: Baby,
    title: "Designed for Ages 4+",
    description: "Simple, intuitive interface that young children can navigate independently without reading.",
  },
  {
    icon: Lock,
    title: "Ad-Free Experience",
    description: "No advertisements, no in-app purchases that surprise you. Just pure educational content.",
  },
]

export function ParentsTrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-foreground">Parent Approved</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built with{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Parents in Mind
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand your concerns about kids&apos; apps. NoteQuest is designed to be completely safe and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/privacy-policy"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            Read our full Privacy Policy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
