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
          {/* Header */}
          <header className="border-b border-gray-800">
            <nav className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
              <a href="/" className="font-heading text-xl font-bold text-white hover:text-accent transition-colors">
                Walter Vambrace
              </a>
              <div className="flex items-center gap-6 text-sm">
                <a href="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </a>
                <a href="/subscribe" className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
                  Subscribe
                </a>
              </div>
            </nav>
          </header>

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
