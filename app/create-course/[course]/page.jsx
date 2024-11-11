'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CourseGenerator from './_components/Programming';
import CourseGeneratorF from './_components/frontend';
import CourseGeneratorH from './_components/health';
import CourseGeneratorC from './_components/creative';

function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      {/* Programming courses */}
      <div>
        <CourseGenerator />
      </div>

      {/* Frontend courses */}
      <div>
        <CourseGeneratorF />
      </div>

      {/* Health courses */}
      <div>
        <CourseGeneratorH />
      </div>

      {/* Creative courses */}
      <div>
        <CourseGeneratorC />
      </div>

      {/* Centered Back Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          className='font-serif text-center mb-5'
          onClick={handleGoBack}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginBottom: '20px',
          }}
        >
          Go Back to Create Course
        </button>
      </div>
    </div>
  );
}

export default Page;
