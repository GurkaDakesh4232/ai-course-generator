"use client";
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Congratulations() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg p-10 shadow-lg text-center max-w-md w-full">
        <FaCheckCircle size={60} className="text-green-600 mb-5 text-center" />
        <h1 className="text-4xl font-semibold text-green-600 mb-4">Congratulations!</h1>
        <p className="text-lg text-gray-700 mb-5">
          You have successfully upgraded to your selected plan. Enjoy all the new features!
        </p>
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-colors hover:bg-green-700"
          onClick={() => window.location.href = '/dashboard'} // Redirect to the homepage or another page
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Congratulations;
