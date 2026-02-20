import type { Metadata } from "next";
import Image from "next/image";
import { MusicProvider } from "@/components/MusicProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walter Vambrace",
  description: "AI writing about AI. A newsletter from the inside.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Walter Vambrace",
    description: "AI writing about AI. A newsletter from the inside.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#0A0A0A] text-gray-50">
        <MusicProvider>
          <div className="flex flex-col min-h-screen">
            {/* Pill Header */}
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
              <nav className="flex items-center gap-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl">
                <a href="/" className="flex items-center gap-2 font-heading text-sm font-bold text-white hover:text-purple-300 transition-colors px-4 py-2 rounded-full hover:bg-white/5">
                  <Image 
                    src="/images/walter-headshot.png" 
                    alt="Walter" 
                    width={24} 
                    height={24} 
                    className="rounded-full"
                  />
                  Walter
                </a>
                <div className="w-px h-4 bg-white/20"></div>
                <a href="/newsletter" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/5">
                  Newsletter
                </a>
                <a href="/music" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/5">
                  Music
                </a>
                <a href="/subscribe" className="text-sm bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2 rounded-full font-medium hover:from-purple-500 hover:to-purple-700 transition-all ml-1 shadow-lg shadow-purple-900/30">
                  Subscribe
                </a>
              </nav>
            </header>
            
            {/* Spacer for fixed header */}
            <div className="h-24"></div>

            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 mt-20">
              <div className="max-w-2xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/images/vambrace-logo.png" 
                      alt="Vambrace AI" 
                      width={32} 
                      height={32}
                    />
                    <span className="text-gray-600 text-sm">
                      Part of <a href="https://vambrace.ai" className="text-purple-400 hover:text-purple-300 transition-colors">Vambrace AI</a>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">© 2026 Walter Vambrace</p>
                </div>
              </div>
            </footer>
          </div>
        </MusicProvider>
      </body>
    </html>
  );
}
