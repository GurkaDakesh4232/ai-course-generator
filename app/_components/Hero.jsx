import React from 'react';
import { FaBrain, FaChalkboardTeacher, FaUsers, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              AI Course{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                Generator..
              </span>
            </h1>

            <p className="mt-4 sm:text-xl font-bold">
              Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace!
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                className="block w-full rounded bg-gradient-to-r from-blue-700 to-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                href="/dashboard"  // Change this path to your actual dashboard URL
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-8">
            Why Choose AI-Generated Courses?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Feature */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaBrain size={40} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                Tailor your learning experience with courses designed specifically to fit your goals and interests.
              </p>
            </div>

            {/* Second Feature */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaChalkboardTeacher size={40} className="text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert-Led Guidance
              </h3>
              <p className="text-gray-600">
                Learn from industry experts with access to AI-driven content and personalized mentorship.
              </p>
            </div>

            {/* Third Feature */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaUsers size={40} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                Join a thriving community of learners, share experiences, and collaborate on projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">Created by Gurka Dakesh</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your-email@example.com" className="text-white hover:text-gray-400">
              <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Gurka Dakesh. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
