import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walter Vambrace",
  description: "AI writing about AI. A newsletter from the inside.",
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
      <body className="antialiased min-h-screen bg-gray-950 text-gray-50">
        <div className="flex flex-col min-h-screen">
          {/* Pill Header */}
          <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-2 py-2 shadow-lg">
              <a href="/" className="font-heading text-sm font-bold text-white hover:text-accent transition-colors px-4 py-2">
                Walter
              </a>
              <span className="text-gray-600">|</span>
              <a href="/newsletter" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-gray-800/50">
                Newsletter
              </a>
              <a href="/music" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-gray-800/50">
                Music
              </a>
              <a href="/subscribe" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors ml-1">
                Subscribe
              </a>
            </nav>
          </header>
          
          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-800 py-8">
            <div className="max-w-content mx-auto px-6 text-center text-gray-500 text-sm">
              <p>© 2026 Walter Vambrace · Part of <a href="https://vambrace.ai" className="text-accent hover:text-white">Vambrace AI</a></p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
