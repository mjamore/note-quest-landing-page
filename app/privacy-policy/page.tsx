import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, Baby, Lock, Eye, Database, Globe } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - NoteQuest",
  description: "NoteQuest privacy policy. Learn how we protect your child&apos;s privacy with our no-data-collection approach.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-foreground">Privacy First</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Quick Summary Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <Database className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-bold text-foreground mb-2">No Data Collection</h3>
                <p className="text-sm text-muted-foreground">We do not collect any personal data from you or your child.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <Eye className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-bold text-foreground mb-2">No Account Required</h3>
                <p className="text-sm text-muted-foreground">No email, no sign-up, no login needed to use the app.</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <Lock className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold text-foreground mb-2">No Third-Party Sharing</h3>
                <p className="text-sm text-muted-foreground">We never share any information with third parties.</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <Globe className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-bold text-foreground mb-2">No Internet Required</h3>
                <p className="text-sm text-muted-foreground">The app works completely offline after download.</p>
              </div>
            </div>

            {/* Full Policy */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Baby className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Designed for Children Ages 4+</h3>
                    <p className="text-white/90 mb-0">
                      NoteQuest is designed specifically for young children. We take children&apos;s privacy extremely seriously and have built the app to collect absolutely no data.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest (&quot;the App&quot;) is a music education application designed for children ages 4 and older. This Privacy Policy explains our commitment to protecting the privacy of our users, especially children.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The short version:</strong> We do not collect, store, use, or share any personal information from anyone who uses our app. Period.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">None.</strong> NoteQuest does not collect any information from its users. Specifically, we do not collect:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Personal information (name, email, phone number, address)</li>
                <li>Device information or identifiers</li>
                <li>Location data</li>
                <li>Usage data or analytics</li>
                <li>Photos, videos, or audio recordings</li>
                <li>Contact lists or social connections</li>
                <li>Any other user data</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest does not require or offer account registration. There is no sign-up process, no login, and no user profiles. Users can immediately start using the app upon download.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest does not integrate with any third-party services that collect user data. We do not use:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Analytics services</li>
                <li>Advertising networks</li>
                <li>Social media integrations</li>
                <li>Third-party login providers</li>
                <li>Cloud storage services</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Internet Connectivity</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest is designed to work completely offline. After the initial download from the App Store, no internet connection is required to use the app. The app does not communicate with any servers.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">In-App Purchases and Advertisements</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest contains no advertisements and no in-app purchases. The app is completely free to use with all features available immediately upon download.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any progress or settings within the app are stored locally on the device only. This data never leaves the device and is not accessible to us or any third party. If you delete the app, all locally stored data is deleted as well.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Children&apos;s Privacy (COPPA Compliance)</h2>
              <p className="text-muted-foreground leading-relaxed">
                NoteQuest complies with the Children&apos;s Online Privacy Protection Act (COPPA). Since we do not collect any personal information from any users, including children under 13, there is no risk of children&apos;s data being collected, used, or disclosed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Our commitment to collecting no user data will not change.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or the app, please contact us through the App Store listing or leave a review with your feedback.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mt-8 border border-border">
                <p className="text-sm text-muted-foreground mb-0">
                  <strong className="text-foreground">Summary:</strong> NoteQuest is designed with children&apos;s privacy as the top priority. We collect no data, require no accounts, show no ads, and work completely offline. Parents can feel confident that their children are using a safe, private, and educational app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
