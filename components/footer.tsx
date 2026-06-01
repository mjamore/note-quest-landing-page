import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">NoteQuest</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Teaching kids to identify musical notes and instruments through fun, interactive learning. Available on iOS for ages 4+.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">App</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Screenshots
                </Link>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Download on iOS
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} NoteQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
