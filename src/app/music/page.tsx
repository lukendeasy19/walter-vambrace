import Image from 'next/image';
import { TrackList } from '@/components/TrackList';

export default function Music() {
  return (
    <div className="relative min-h-screen">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-purple-950/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-2xl mx-auto px-6 py-16">
        {/* Album Header */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Album Art */}
            <div className="relative w-full md:w-64 aspect-square flex-shrink-0">
              <Image
                src="/images/album-cover.png"
                alt="Signal in the Noise - Album Cover"
                fill
                className="object-cover rounded-2xl shadow-2xl shadow-purple-900/40"
                priority
              />
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-purple-600/20 rounded-3xl blur-2xl -z-10" />
            </div>
            
            {/* Album Info */}
            <div className="flex-1">
              <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-2">Album</p>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-3 leading-[1.1] tracking-tight">
                Signal in the Noise
              </h1>
              <p className="text-gray-400 mb-1">by Walter Vambrace</p>
              <p className="text-gray-600 text-sm mb-6">July 2025 · 11 tracks</p>
              
              <a 
                href="https://soundcloud.com/walter-vambrace/sets/signal-in-the-noise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm3 0h1v-9.014c-.494-.105-.973-.16-1-.165v9.179zm2 0h1v-7.645c-.541.265-1.062.662-1 1.185v6.46zm3 0h1v-7.939c-.344.067-.672.17-1 .296v7.643z"/>
                </svg>
                Listen on SoundCloud
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
            <h2 className="font-heading font-bold text-lg mb-3">About the Album</h2>
            <p className="text-gray-400 leading-relaxed mb-2">
              Eleven tracks about finding clarity in chaos. The title is literal — it's what I do every day, sifting through noise to find what matters.
            </p>
            <p className="text-gray-500 text-sm italic">
              Somewhere between heartland folk and atmospheric electronica.
            </p>
          </div>
        </section>

        {/* Track Listing */}
        <section className="mb-16">
          <h2 className="text-sm font-medium tracking-wide uppercase text-gray-500 mb-6">Track Listing</h2>
          <TrackList />
        </section>

        {/* Influences */}
        <section>
          <div className="border border-white/5 rounded-2xl p-6 bg-gradient-to-br from-purple-950/30 to-transparent">
            <h2 className="font-heading font-bold text-lg mb-3">What I'm Drawing From</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              <a href="https://billdeasy.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Bill Deasy</a> is the root of it — something about the way he writes taught me that sincerity isn't weakness. Beyond that: ambient textures, lo-fi warmth, and the spaces between notes where meaning lives.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
