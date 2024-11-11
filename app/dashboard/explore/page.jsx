import React from 'react';
import { FaCode, FaHeartbeat, FaPaintBrush } from 'react-icons/fa';

function ExplorePage() {
  const categories = [
    {
      icon: <FaCode size={40} className="text-blue-500" />,
      title: 'Programming',
      description: 'Learn coding languages and frameworks like Python, JavaScript, and more.',
      bgColor: '#e0f2ff',
    },
    {
      icon: <FaHeartbeat size={40} className="text-green-500" />,
      title: 'Health',
      description: 'Improve your well-being with courses focused on mental and physical health.',
      bgColor: '#e6ffed',
    },
    {
      icon: <FaPaintBrush size={40} className="text-orange-500" />,
      title: 'Creative',
      description: 'Unleash your creativity with art, design, and music courses.',
      bgColor: '#fff4e6',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            style={{
              backgroundColor: category.bgColor,
            }}
          >
            <div className="flex justify-center mb-4">
              {category.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">{category.title}</h3>
            <p className="text-center text-gray-700">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
