import React from 'react';
import { Music2, Mic2, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Music2,
    title: 'La Mejor Música',
    description: 'Una selección musical cuidadosamente elegida para ti.'
  },
  {
    icon: Mic2,
    title: 'Programas en Vivo',
    description: 'Contenido original y entretenimiento las 24 horas.'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Únete a nuestra comunidad de oyentes.'
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}