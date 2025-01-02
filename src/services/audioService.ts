export class AudioService {
  private audio: HTMLAudioElement;
  private volume: number;

  constructor(url: string) {
    this.audio = new Audio();
    this.audio.src = url;
    this.audio.preload = 'auto';
    this.volume = 1;
    
    // Configuración adicional para mejorar la compatibilidad
    this.audio.crossOrigin = 'anonymous';
    this.audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
    });
  }

  async play(): Promise<void> {
    try {
      // Reiniciar el src antes de reproducir para evitar problemas de caché
      const currentSrc = this.audio.src;
      this.audio.src = currentSrc;
      
      await this.audio.load();
      await this.audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      throw error;
    }
  }

  pause(): void {
    this.audio.pause();
  }

  setVolume(value: number): void {
    this.volume = value / 100;
    this.audio.volume = this.volume;
  }

  getVolume(): number {
    return this.volume * 100;
  }
}