import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}