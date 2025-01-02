import React from 'react';
import { Controls } from './Controls';
import { VolumeControl } from './VolumeControl';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

export function Player() {
  const { isPlaying, volume, error, togglePlay, handleVolumeChange } = useAudioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Controls isPlaying={isPlaying} onTogglePlay={togglePlay} />
            <div>
              <h3 className="font-semibold">En Vivo</h3>
              <p className="text-sm text-gray-600">FM Avenida 90.9</p>
              {error && (
                <p className="text-sm text-red-600">
                  Error: No se pudo reproducir el audio. Por favor, intente nuevamente.
                </p>
              )}
            </div>
          </div>
          <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
}