'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function CourseCard() {
  const router = useRouter();

  const courses = [
    {
      title: 'Programming',
      description: 'Explore the world of programming with languages and frameworks like Python, JavaScript, and more.',
      bgColor: '#0070f3',
    },
    {
      title: 'Health',
      description: 'Dive into health and wellness courses to enhance your mind and body.',
      bgColor: '#34c759',
    },
    {
      title: 'Creative',
      description: 'Unlock your creativity with courses in art, design, music, and more.',
      bgColor: '#ff9500',
    },
  ];

  const handleLearnMore = (title) => {
    // Convert the title to lowercase and replace spaces with hyphens for URL consistency
    const coursePath = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/create-course/course`);
  };

  return (
    <div className="flex justify-center items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8">
      {courses.map((course) => (
        <div
          key={course.title}
          className="w-72 h-60 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          style={{
            backgroundColor: course.bgColor,
            color: '#fff',
          }}
        >
          <div className="flex flex-col justify-center items-center h-full p-5 text-center">
            <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
            <p className="text-md mb-4">{course.description}</p>
            <button
              className="px-4 py-2 bg-white text-black font-semibold rounded transition-colors hover:bg-gray-200"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
              }}
              onClick={() => handleLearnMore(course.title)}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
