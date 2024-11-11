"use client"
import React, { useState, useEffect } from "react";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";

function CourseGeneratorF() {
  const [pdfVisible, setPdfVisible] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const courses = [
    {
      id: 1,
      title: "HTML",
      imageUrl: "/html.jpg",
      duration: "6:14:07",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=LjwNXASSfq8",
      pdfUrl: "https://www.iimchyderabad.com/Material/html.pdf",
    },
    {
      id: 2,
      title: "CSS",
      imageUrl: "/css.jpg",
      duration: "2:30:47 min",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=LGRogkgRrOs",
      pdfUrl: "https://www.bu.edu/lernet/artemis/years/2011/slides/css.pdf",
    },
    {
      id: 3,
      title: "Javascript",
      imageUrl: "/javascript.png",
      duration: "22:15:56",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
      pdfUrl: "https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf",
    },
    {
      id: 4,
      title: "Bootstrap",
      imageUrl: "/bootstrap.jpg",
      duration: "1:22:55",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=4sosXZsdy-s",
      pdfUrl: "https://www.cs.toronto.edu/~mashiyat/csc309/Tutorial/6/Bootstrap.pdf",
    },
  ];

  useEffect(() => {
    setLoaded(true); // Set loaded to true after component mounts
  }, []);

  const handleDownload = (pdfUrl) => {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "course.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="px-5 py-5 mb-10" style={{ backgroundImage: `url('/back.avi')` }}>
      {/* Heading */}
     
      <h1 className="text-2xl font-serif text-center mb-5">Frontend Courses</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`bg-white shadow-lg rounded-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
              ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              transition-opacity`}
  style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Course Image */}
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            {/* Download PDF Button (Top Right Corner) */}
            <button
              onClick={() => handleDownload(course.pdfUrl)}
              className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full transform transition-transform duration-300 hover:scale-110"
            >
              <FaDownload />
            </button>

            <div className="p-4">
              {/* Course Title */}
              <h3 className="text-xl font-semibold text-primary">
                {course.title}
              </h3>

              {/* Course Duration */}
              <p className="text-sm text-gray-600 mt-2">
                Duration: {course.duration}
              </p>

              {/* Languages */}
              <div className="mt-2">
                <p className="text-sm text-gray-600">Languages: </p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {course.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>

              {/* View and PDF Buttons */}
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => window.open(course.youtubeLink, "_blank")}
                  className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex items-center transition-all duration-300 hover:bg-purple-500"
                >
                  <FaEye className="mr-2 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="group-hover:hidden">View</span>
                </button>
                <button
                  onClick={() =>
                    setPdfVisible(pdfVisible === course.id ? null : course.id)
                  }
                  className="bg-gray-700 text-white py-2 px-4 rounded-md text-sm flex items-center transition-all duration-300 hover:bg-gray-500"
                >
                  <FaFilePdf className="mr-2 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="group-hover:hidden">PDF</span>
                </button>
              </div>

              {/* PDF View */}
              {pdfVisible === course.id && (
                <div className="mt-4">
                  <iframe
                    src={course.pdfUrl}
                    title="Course PDF"
                    width="100%"
                    height="400"
                    className="border-2 border-gray-200"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseGeneratorF;
