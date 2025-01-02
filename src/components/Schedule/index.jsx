import React from 'react';
import { Clock } from 'lucide-react';
import { ProgramItem } from './ProgramItem';

const programs = [
  { time: '06:00', name: 'Despertar Musical', host: 'Ana García' },
  { time: '09:00', name: 'Noticias de la Mañana', host: 'Carlos Ruiz' },
  { time: '11:00', name: 'Música sin Límites', host: 'María Torres' },
  { time: '14:00', name: 'Tarde de Éxitos', host: 'Pedro Sánchez' },
  { time: '17:00', name: 'El Show de la Tarde', host: 'Laura Méndez' },
];

export function Schedule() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold">Programación de Hoy</h2>
      </div>
      <div className="space-y-4">
        {programs.map((program) => (
          <ProgramItem key={program.time} {...program} />
        ))}
      </div>
    </div>
  );
}