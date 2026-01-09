import React from 'react';

const SectionTitle = ({ subtitle, title, description, light = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
        light 
          ? 'bg-white/10 text-white' 
          : 'bg-gradient-to-r from-blue-50 to-red-50 text-blue-600'
      }`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;