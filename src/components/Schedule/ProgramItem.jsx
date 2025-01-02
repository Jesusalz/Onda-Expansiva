import React from 'react';

export function ProgramItem({ time, name, host }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border rounded-lg hover:bg-purple-50 transition-colors duration-300">
      <div className="w-full sm:w-20 font-bold text-purple-600 mb-2 sm:mb-0">{time}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">Con {host}</p>
      </div>
    </div>
  );
}