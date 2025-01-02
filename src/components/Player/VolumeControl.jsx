import React from 'react';
import { Volume2 } from 'lucide-react';

export function VolumeControl({ volume, onVolumeChange }) {
  return (
    <div className="flex items-center space-x-4">
      <Volume2 className="w-6 h-6 text-gray-600" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-24 accent-purple-600"
      />
    </div>
  );
}