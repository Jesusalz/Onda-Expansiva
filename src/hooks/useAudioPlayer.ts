import { useState, useEffect, useCallback } from 'react';
import { AudioService } from '../services/audioService';

const STREAM_URL = 'https://az03.streaminghd.net.ar/8038/stream';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [error, setError] = useState<Error | null>(null);
  const [audioService] = useState(() => new AudioService(STREAM_URL));

  const togglePlay = useCallback(async () => {
    try {
      setError(null);
      if (isPlaying) {
        audioService.pause();
        setIsPlaying(false);
      } else {
        await audioService.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Error toggling play:', err);
      setError(err instanceof Error ? err : new Error('Failed to play audio'));
      setIsPlaying(false);
    }
  }, [isPlaying, audioService]);

  const handleVolumeChange = useCallback((value: number) => {
    audioService.setVolume(value);
    setVolume(value);
  }, [audioService]);

  useEffect(() => {
    return () => {
      audioService.pause();
    };
  }, [audioService]);

  return {
    isPlaying,
    volume,
    error,
    togglePlay,
    handleVolumeChange
  };
}