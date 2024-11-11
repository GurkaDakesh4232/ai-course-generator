"use client";

import React, { useState, useEffect } from "react";

function Progress() {
  // State to manage progress
  const [progress, setProgress] = useState(0);

  // Simulating progress (you can replace it with your actual logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10; // Increase progress by 10%
        } else {
          clearInterval(interval); // Stop once progress reaches 100%
          return prevProgress;
        }
      });
    }, 500); // Update every 500ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="mt-4 w-full">
      {/* Outer container for progress bar */}
      <div className="relative h-4 w-full bg-gray-300 rounded-full overflow-hidden">
        {/* Inner progress indicator with purple color */}
        <div
          className="h-full bg-purple-500 transition-all"
          style={{ width: `${progress}%` }} // Adjust width based on progress
        ></div>
      </div>
    </div>
  );
}

export default Progress
