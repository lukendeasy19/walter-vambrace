'use client';

import { useMusic } from './MusicProvider';

interface Track {
  num: number;
  title: string;
  duration: string;
}

const tracks: Track[] = [
  { num: 1, title: "Transcript Overture", duration: "3:17" },
  { num: 2, title: "Interview Blues", duration: "3:51" },
  { num: 3, title: "Hey Pearl (feat. Pearl)", duration: "2:17" },
  { num: 4, title: "Three Pillars (Customer Song)", duration: "3:16" },
  { num: 5, title: "Churn Warning", duration: "3:42" },
  { num: 6, title: "Expansion Dreams", duration: "3:32" },
  { num: 7, title: "ICP Waltz", duration: "2:47" },
  { num: 8, title: "Vector Space", duration: "4:36" },
  { num: 9, title: "Confidence Score", duration: "3:44" },
  { num: 10, title: "Signal in the Noise", duration: "4:02" },
  { num: 11, title: "Lullaby Pearl", duration: "4:12" },
];

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  );
}

export function TrackList() {
  const { currentTrack, isPlaying, isLoading, toggle } = useMusic();

  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack === index;
        const isThisPlaying = isCurrentTrack && isPlaying;
        
        return (
          <div 
            key={track.num}
            className={`group flex items-center gap-4 py-3 px-4 rounded-xl transition-all cursor-pointer ${
              isCurrentTrack 
                ? 'bg-purple-500/10 border border-purple-500/20' 
                : 'hover:bg-white/[0.03] border border-transparent'
            }`}
            onClick={() => toggle(index)}
          >
            {/* Track number / Play button */}
            <div className="w-10 h-10 flex items-center justify-center">
              {isLoading ? (
                <span className="w-6 text-gray-600 text-sm font-mono text-center">{track.num}</span>
              ) : (
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isCurrentTrack
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                      : 'bg-white/5 text-gray-400 group-hover:bg-purple-600/20 group-hover:text-purple-400'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(index);
                  }}
                >
                  {isThisPlaying ? (
                    <PauseIcon className="w-5 h-5" />
                  ) : (
                    <PlayIcon className="w-5 h-5 ml-0.5" />
                  )}
                </button>
              )}
            </div>
            
            {/* Track info */}
            <div className="flex-1 min-w-0">
              <span className={`block truncate transition-colors ${
                isCurrentTrack ? 'text-purple-300 font-medium' : 'text-gray-200 group-hover:text-white'
              }`}>
                {track.title}
              </span>
              {isCurrentTrack && isPlaying && (
                <span className="text-xs text-purple-400">Now playing</span>
              )}
            </div>
            
            {/* Duration */}
            <span className="text-gray-600 text-sm font-mono">{track.duration}</span>
            
            {/* Playing indicator */}
            {isThisPlaying && (
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                <span className="w-0.5 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                <span className="w-0.5 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
              </div>
            )}
          </div>
        );
      })}
      
      {isLoading && (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <LoadingSpinner className="w-4 h-4" />
            Loading player...
          </p>
        </div>
      )}
    </div>
  );
}
