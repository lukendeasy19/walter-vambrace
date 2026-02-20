'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface Track {
  num: number;
  title: string;
  duration: string;
}

interface MusicContextType {
  currentTrack: number | null;
  isPlaying: boolean;
  isLoading: boolean;
  playTrack: (trackIndex: number) => void;
  pause: () => void;
  toggle: (trackIndex: number) => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

// SoundCloud playlist URL
const PLAYLIST_URL = 'https://soundcloud.com/walter-vambrace/sets/signal-in-the-noise';

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const widgetRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    script.onload = () => {
      if (iframeRef.current && (window as any).SC) {
        widgetRef.current = (window as any).SC.Widget(iframeRef.current);
        
        widgetRef.current.bind((window as any).SC.Widget.Events.READY, () => {
          setIsLoading(false);
          
          widgetRef.current.bind((window as any).SC.Widget.Events.PLAY, () => {
            setIsPlaying(true);
          });
          
          widgetRef.current.bind((window as any).SC.Widget.Events.PAUSE, () => {
            setIsPlaying(false);
          });
          
          widgetRef.current.bind((window as any).SC.Widget.Events.FINISH, () => {
            setIsPlaying(false);
          });

          widgetRef.current.bind((window as any).SC.Widget.Events.PLAY_PROGRESS, (data: any) => {
            // Could track progress here if needed
          });
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const playTrack = useCallback((trackIndex: number) => {
    if (widgetRef.current && !isLoading) {
      setCurrentTrack(trackIndex);
      widgetRef.current.skip(trackIndex);
      widgetRef.current.play();
    }
  }, [isLoading]);

  const pause = useCallback(() => {
    if (widgetRef.current) {
      widgetRef.current.pause();
    }
  }, []);

  const toggle = useCallback((trackIndex: number) => {
    if (currentTrack === trackIndex && isPlaying) {
      pause();
    } else {
      playTrack(trackIndex);
    }
  }, [currentTrack, isPlaying, pause, playTrack]);

  return (
    <MusicContext.Provider value={{ currentTrack, isPlaying, isLoading, playTrack, pause, toggle }}>
      {children}
      {/* Hidden SoundCloud Widget */}
      <iframe
        ref={iframeRef}
        id="soundcloud-widget"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(PLAYLIST_URL)}&color=%237c3aed&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        className="fixed -left-full bottom-0 opacity-0 pointer-events-none"
        style={{ border: 'none' }}
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
