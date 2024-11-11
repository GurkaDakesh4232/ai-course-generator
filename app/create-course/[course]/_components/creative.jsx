"use client"
import React, { useState, useEffect } from "react";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";

function CourseGeneratorC() {
  const [pdfVisible, setPdfVisible] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Drawing",
      imageUrl: "/drawing.jpg",
      duration: "0:14:07",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=kdvzJ6nLFUk",
      pdfUrl: "https://www.orl-hno.ch/fileadmin/user_upload/Dokumente/Veranstaltungen/Sommerschule/Sommerschule_2018/2018_Anatomy___Physiology_Nose___Paranasal_Sinuses_-_Handout.pdf",
    },
    {
      id: 2,
      title: "Photography",
      imageUrl: "/photo.webp",
      duration: "0:30:47 min",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=U_wTfpYK_ms",
      pdfUrl: "https://www.nei.nih.gov/sites/default/files/2019-06/parts-of-the-eye.pdf",
    },
    {
      id: 3,
      title: "Painting",
      imageUrl: "/paint.jpg",
      duration: "0:15:56",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=bjTi--Jw3rU",
      pdfUrl: "http://www.giovannimariagaeta.it/Mouth%20Anatomy.pdf",
    },
    {
      id: 4,
      title: "Music",
      imageUrl: "/music.jpg",
      duration: "0:22:55",
      languages: ["English"],
      youtubeLink: "https://www.youtube.com/watch?v=4sosXZsdy-s",
      pdfUrl: "https://elizabeth-foundation.org/wp-content/uploads/2022/06/Lesson-1-The-Human-Ear-Structure-and-function-lesson.pdf",
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
     
      <h1 className="text-2xl font-serif text-center mb-5">Creative Courses</h1>

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

export default CourseGeneratorC;
