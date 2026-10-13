export const TRACKS = [
  { id: 'cosmic', name: 'Cosmic Pad', tag: 'Ambient Swells' },
  { id: 'rain', name: 'Midnight Rain', tag: 'Rain & Rhodes' },
  { id: 'zen', name: 'Deep Zen', tag: 'Singing Bowls' },
  { id: 'celestial', name: 'Celestial', tag: 'Star Chimes' },
];

const COSMIC_CHORDS = [
  [87.31, 174.61, 261.63, 329.63, 392.00],
  [110.00, 164.81, 220.00, 261.63, 329.63],
  [73.42, 146.83, 220.00, 261.63, 349.23],
  [65.41, 130.81, 196.00, 261.63, 329.63],
  [98.00, 146.83, 220.00, 293.66, 392.00],
];

const LOFI_PIANO_CHORDS = [
  [130.81, 196.00, 246.94, 293.66],
  [110.00, 164.81, 220.00, 261.63, 329.63],
  [87.31, 174.61, 220.00, 261.63],
  [98.00, 146.83, 196.00, 261.63],
];

const CELESTIAL_NOTES = [311.13, 349.23, 415.30, 466.16, 523.25, 622.25, 698.46];

class AmbientSoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.currentTrackIndex = 0;
    this.timerIds = [];
    this.activeNodes = [];
    this.rainSource = null;
    this.rainGain = null;
    this.volume = 0.28;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener({
      isPlaying: this.isPlaying,
      trackIndex: this.currentTrackIndex,
      track: TRACKS[this.currentTrackIndex],
    }));
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

    const compressor = this.ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
    compressor.knee.setValueAtTime(30, this.ctx.currentTime);
    compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
    compressor.attack.setValueAtTime(0.05, this.ctx.currentTime);
    compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

    this.masterGain.connect(compressor);
    compressor.connect(this.ctx.destination);
  }

  clearTimersAndNodes() {
    this.timerIds.forEach((id) => clearTimeout(id));
    this.timerIds = [];

    this.activeNodes.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {
        // node stopped
      }
    });
    this.activeNodes = [];

    if (this.rainSource) {
      try {
        this.rainSource.stop();
        this.rainSource.disconnect();
      } catch {
        // rain stopped
      }
      this.rainSource = null;
    }
  }

  playCosmicChord(step = 0) {
    if (!this.isPlaying || this.currentTrackIndex !== 0) return;

    const freqs = COSMIC_CHORDS[step % COSMIC_CHORDS.length];
    const duration = 7.5;
    const now = this.ctx.currentTime;
    const attack = 2.2;
    const release = 3.5;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420, now);
    filter.Q.setValueAtTime(1.2, now);
    filter.connect(this.masterGain);

    freqs.forEach((freq, i) => {
      [-4, 4].forEach((detuneVal) => {
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        osc.type = i === 0 ? 'sine' : (i % 2 === 0 ? 'sine' : 'triangle');
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(detuneVal, now);

        const targetVol = (0.16 / Math.sqrt(freqs.length)) * (i === 0 ? 1.2 : 0.85);

        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.exponentialRampToValueAtTime(targetVol, now + attack);
        noteGain.gain.setValueAtTime(targetVol, now + duration - release);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(noteGain);
        noteGain.connect(filter);

        osc.start(now);
        osc.stop(now + duration + 0.1);
        this.activeNodes.push(osc);
      });
    });

    const nextDelay = (duration - 2.0) * 1000;
    const timerId = setTimeout(() => {
      this.playCosmicChord(step + 1);
    }, nextDelay);
    this.timerIds.push(timerId);
  }

  startRainSound() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 2.8;
    }

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = 'bandpass';
    rainFilter.frequency.setValueAtTime(750, this.ctx.currentTime);
    rainFilter.Q.setValueAtTime(0.6, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = buffer;
    this.rainSource.loop = true;

    this.rainSource.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.masterGain);

    this.rainSource.start();
  }

  playRainLofiChord(step = 0) {
    if (!this.isPlaying || this.currentTrackIndex !== 1) return;

    const freqs = LOFI_PIANO_CHORDS[step % LOFI_PIANO_CHORDS.length];
    const duration = 5.5;
    const now = this.ctx.currentTime;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(550, now);
    filter.Q.setValueAtTime(0.8, now);
    filter.connect(this.masterGain);

    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      const targetVol = 0.12 * (i === 0 ? 1.3 : 0.8);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(targetVol, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(filter);

      osc.start(now);
      osc.stop(now + duration + 0.1);
      this.activeNodes.push(osc);
    });

    const nextDelay = (duration - 1.2) * 1000;
    const timerId = setTimeout(() => {
      this.playRainLofiChord(step + 1);
    }, nextDelay);
    this.timerIds.push(timerId);
  }

  playZenBowl(step = 0) {
    if (!this.isPlaying || this.currentTrackIndex !== 2) return;

    const bases = [108.0, 144.0, 162.0, 216.0];
    const fundamental = bases[step % bases.length];
    const duration = 9.0;
    const now = this.ctx.currentTime;

    const harmonics = [
      { ratio: 1.0, vol: 0.18, decay: duration },
      { ratio: 2.76, vol: 0.09, decay: duration * 0.75 },
      { ratio: 5.40, vol: 0.04, decay: duration * 0.5 },
    ];

    harmonics.forEach(({ ratio, vol, decay }) => {
      [-0.1, 0.1].forEach((drift) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * ratio + drift, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(vol, now + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + decay + 0.1);
        this.activeNodes.push(osc);
      });
    });

    const nextDelay = (duration - 2.5) * 1000;
    const timerId = setTimeout(() => {
      this.playZenBowl(step + 1);
    }, nextDelay);
    this.timerIds.push(timerId);
  }

  playCelestialBackground() {
    if (!this.isPlaying || this.currentTrackIndex !== 3) return;

    const droneFreqs = [130.81, 196.00];
    const now = this.ctx.currentTime;
    droneFreqs.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.06, now);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      this.activeNodes.push(osc);
    });

    this.scheduleCelestialChimes();
  }

  scheduleCelestialChimes = () => {
    if (!this.isPlaying || this.currentTrackIndex !== 3) return;

    const note = CELESTIAL_NOTES[Math.floor(Math.random() * CELESTIAL_NOTES.length)];
    const now = this.ctx.currentTime;
    const duration = 2.4;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
    this.activeNodes.push(osc);

    const nextInterval = 1200 + Math.random() * 1600;
    const timerId = setTimeout(this.scheduleCelestialChimes, nextInterval);
    this.timerIds.push(timerId);
  };

  playCurrentTrack() {
    this.clearTimersAndNodes();
    switch (this.currentTrackIndex) {
      case 0:
        this.playCosmicChord(0);
        break;
      case 1:
        this.startRainSound();
        this.playRainLofiChord(0);
        break;
      case 2:
        this.playZenBowl(0);
        break;
      case 3:
        this.playCelestialBackground();
        break;
      default:
        this.playCosmicChord(0);
    }
  }

  async start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlaying = true;

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 1.2);

    this.playCurrentTrack();
    this.notify();
  }

  stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
    }

    setTimeout(() => {
      if (!this.isPlaying) {
        this.clearTimersAndNodes();
      }
    }, 900);

    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % TRACKS.length;
    if (this.isPlaying) {
      this.playCurrentTrack();
    }
    this.notify();
    return this.currentTrackIndex;
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    if (this.isPlaying) {
      this.playCurrentTrack();
    }
    this.notify();
    return this.currentTrackIndex;
  }

  setTrack(index) {
    if (index >= 0 && index < TRACKS.length) {
      this.currentTrackIndex = index;
      if (this.isPlaying) {
        this.playCurrentTrack();
      }
      this.notify();
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
