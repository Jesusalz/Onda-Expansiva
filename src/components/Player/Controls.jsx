import React from 'react';
import { Play, Pause, Loader } from 'lucide-react';

export function Controls({ isPlaying, onTogglePlay }) {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onTogglePlay();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-50"
    >
      {loading ? (
        <Loader className="w-6 h-6 animate-spin" />
      ) : isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
    </button>
  );
}