"use client";
import React, { useState } from 'react';
import Header from '../dashboard/_components/Header';
import { UserInputContext } from '../_context/UserInputContext';

function CreateCourselayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState([]);

  return (
    <div>
      <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
        {/* Wrapping Header and children */}
        <Header />
        {children}
      </UserInputContext.Provider>
    </div>
  );
}

export default CreateCourselayout;
