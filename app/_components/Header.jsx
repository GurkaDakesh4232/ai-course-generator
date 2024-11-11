"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button'; // Make sure this Button component exists
import { useRouter } from 'next/navigation'; // Import useRouter from next/router for navigation

function Header() {
  const router = useRouter(); // Initialize useRouter hook

  const handleGetStartedClick = () => {
    // Navigate to the dashboard page
    router.push('/dashboard'); // Update the path to your actual dashboard URL
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" width={35} height={35} alt="Logo" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 font-semibold text-lg">
          AI-Courses
        </h1>
      </div>

      {/* Get Started Button with styling and onClick navigation */}
      <Button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-blue-700 py-2 px-6 rounded-md transition duration-300 ease-in-out"
        onClick={handleGetStartedClick} // Trigger navigation on button click
      >
        Get Started
      </Button>
    </div>
  );
}

export default Header;
