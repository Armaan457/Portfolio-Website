import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { ambientSound, TRACKS } from '../utils/ambientSound';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = ambientSound.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setTrackIndex(state.trackIndex);
    });
    return () => {
      unsubscribe();
      ambientSound.stop();
    };
  }, []);

  const handleTogglePlay = (e) => {
    e.stopPropagation();
    ambientSound.toggle();
  };

  const handleNextTrack = (e) => {
    e.stopPropagation();
    ambientSound.nextTrack();
  };

  const currentTrack = TRACKS[trackIndex];

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Ambient audio player"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center select-none"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-sm opacity-20 group-hover:opacity-40 transition duration-300 -z-10"></div>

        <div className="flex items-center gap-3 px-3.5 py-2 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-800 hover:border-accent-primary transition-all duration-300 shadow-xl shadow-black/50">
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
            className="relative w-6 h-6 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 group/cd"
            title={isPlaying ? 'Click to pause' : 'Click to play'}
          >
            <div
              className={`w-6 h-6 rounded-full border border-neutral-700/80 flex items-center justify-center relative overflow-hidden shadow-sm transition-transform duration-200 group-hover/cd:scale-105 ${
                isPlaying ? 'cd-spinning' : 'cd-paused'
              }`}
              style={{
                background: 'radial-gradient(circle, #262626 28%, #171717 30%, #262626 48%, #171717 50%, #262626 68%, #0f0f0f 70%)',
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 45deg, transparent 0deg, rgba(255,255,255,0.25) 45deg, transparent 90deg, rgba(255,255,255,0.15) 180deg, transparent 225deg, rgba(255,255,255,0.25) 270deg, transparent 360deg)',
                }}
              />
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center shadow-sm z-10">
                <div className="w-1 h-1 rounded-full bg-neutral-950 border border-neutral-700" />
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={handleNextTrack}
            title="Click to change song"
            className="flex items-center text-left cursor-pointer group/title"
          >
            <span className="text-[13px] font-semibold text-neutral-200 group-hover/title:text-accent-light transition-colors whitespace-nowrap">
              {currentTrack.name}
            </span>
          </button>

          <div className="flex items-center ml-0.5">
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-7 h-7 rounded-full bg-accent-badge-start border border-accent-border hover:bg-accent-primary flex items-center justify-center text-accent-light hover:text-white transition-all duration-200 cursor-pointer"
            >
              {isPlaying ? (
                <FaPause className="text-[10px]" />
              ) : (
                <FaPlay className="text-[9px] ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default AudioPlayer;
