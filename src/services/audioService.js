export class AudioService {
  constructor(url) {
    this.audio = new Audio();
    this.audio.src = url;
    this.audio.preload = 'auto';
    this.volume = 1;
    
    this.audio.crossOrigin = 'anonymous';
    this.audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
    });
  }

  async play() {
    try {
      const currentSrc = this.audio.src;
      this.audio.src = currentSrc;
      
      await this.audio.load();
      await this.audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      throw error;
    }
  }

  pause() {
    this.audio.pause();
  }

  setVolume(value) {
    this.volume = value / 100;
    this.audio.volume = this.volume;
  }

  getVolume() {
    return this.volume * 100;
  }
}