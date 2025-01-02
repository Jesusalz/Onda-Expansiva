import React from 'react';
import { Radio } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Radio className="w-8 h-8" />
      <h1 className="text-2xl font-bold">Radio Onda Expansiva</h1>
    </div>
  );
}