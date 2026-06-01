import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Rotate to Learn",
    description: "Turn your device to landscape mode to enter the interactive learning experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0596-tUjqQP93qve8EiUuuuNZbteKFE2ADa.jpeg",
  },
  {
    number: "2",
    title: "Explore Sounds",
    description: "Tap notes on the piano or instruments to hear their unique sounds and learn to recognize them.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0598-lrpqiHy2FcwaM6M7rw4uiCdb9KopqA.jpeg",
    isLandscape: true,
  },
  {
    number: "3",
    title: "Test Your Ear",
    description: "Rotate back to portrait mode and take fun quizzes to test what you have learned!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0600-EwxAN6DzmcXhMpQZkKGw3tREACODtM.jpeg",
  },
  {
    number: "4",
    title: "Earn Stars",
    description: "Get instant feedback, earn stars for correct answers, and celebrate your progress!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0608-JqqRnTyLqOk49Lu5E2ygVtPLUCast6.jpeg",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              NoteQuest
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, intuitive learning flow that kids can navigate independently.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className={`${step.isLandscape ? 'w-full max-w-md' : 'w-48 md:w-56'} transform hover:scale-105 transition-transform duration-300`}>
                  <div className={`${step.isLandscape ? 'rounded-2xl' : 'rounded-[2rem]'} overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-gray-900 bg-gray-900`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={step.isLandscape ? 500 : 240}
                      height={step.isLandscape ? 280 : 520}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
