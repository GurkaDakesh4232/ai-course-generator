"use client";
import React, { useEffect, useState, useContext } from 'react';
import { CgStack } from "react-icons/cg";
import { MdTopic } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { Button } from '../../components/ui/button';
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';
import LoadingDialog from './_components/LoadingDialog';
import { generateCourseLayout_AI } from '../../configs/AIModel';
import { useRouter } from 'next/navigation';


function CreateCourse() {
  const StepperOptions = [
    { id: 1, name: 'Category', icon: <CgStack /> },
    { id: 2, name: 'Topic & Desc', icon: <MdTopic /> },
    { id: 3, name: 'Options', icon: <TbTableOptions /> }
  ];

  const { userCourseInput } = useContext(UserInputContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [courseLayout, setCourseLayout] = useState(null);
  const router=useRouter();

  useEffect(() => {
    console.log("User input:", userCourseInput);
  }, [userCourseInput]);

  const handleNext = () => {
    if (activeIndex < StepperOptions.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const checkStatus = () => {
    if (!userCourseInput) return true;
    const { category, topic, level, duration, displayvideo, noofchapters } = userCourseInput;

    return (
      (activeIndex === 0 && !category) ||
      (activeIndex === 1 && !topic) ||
      (activeIndex === 2 && (level === undefined || duration === undefined || displayvideo === undefined || noofchapters === undefined))
    );
  };

  const GenerateCourseLayout = async () => {
    setLoading(true);
  
    // Construct the prompt based on user input
    const BASIC_PROMPT = 'Generate a course tutorial on the following details with fields as course name, description, chapter name, about, and duration.';
    const USER_INPUT_PROMPT = `category: ${userCourseInput?.category}, topic: ${userCourseInput?.topic}, level: ${userCourseInput?.level}, duration: ${userCourseInput?.duration}, noofchapters: ${userCourseInput?.noofchapters}, in JSON format;`;
  
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log("Final Prompt:", FINAL_PROMPT);
  
    try {
      // Await the response from generateCourseLayout_AI (make sure the function is returning the AI response)
      const result = await generateCourseLayout_AI();  // Call the function, not sendMessage

      // Assuming the result is a parsed JSON object or a string containing JSON
      const generatedText = result;  // If result is already parsed, just use it directly

      if (generatedText) {
        console.log("Generated Response:", generatedText);
        
        // Optionally, parse the JSON response if applicable
        try {
          const parsedResponse = JSON.parse(generatedText);
          console.log("Parsed Response:", parsedResponse);
          
          // Do something with the parsed response, like updating state or displaying it
          setCourseLayout(parsedResponse);  // Example: update state with the generated course data
        } catch (e) {
          console.error("Error parsing JSON:", e);
        }
      }

     

    } catch (error) {
      console.error("Error generating course layout:", error);
    } finally {
      setLoading(false);  // Stop the loading state after the process is complete
      router.replace('/create-course/course')
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-bold">Create Course</h2>
      </div>

      <div className="flex justify-center mt-6 items-center">
        {StepperOptions.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div className="flex flex-col items-center w-[50px] md:w-[100px]">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${activeIndex >= index ? 'bg-purple-600' : 'bg-gray-300'}`}>
                {item.icon}
              </div>
              <h2 className="hidden md:block md:text-sm mt-2">{item.name}</h2>
            </div>
            {index !== StepperOptions.length - 1 && (
              <div className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 ${activeIndex > index ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
            )}
          </div>
        ))}
      </div>

      {activeIndex === 0 ? <SelectCategory /> : activeIndex === 1 ? <TopicDescription /> : <SelectOption />}

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        <div className="flex justify-between mt-10 gap-3">
          <Button disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)} variant="outline">Previous</Button>
          {activeIndex < 2 && (
            <Button disabled={checkStatus()} onClick={handleNext}>Next</Button>
          )}
          {activeIndex === 2 && (
            <Button disabled={checkStatus()} onClick={GenerateCourseLayout}>Generate Course Layout</Button>
          )}
        </div>
      </div>

      {/* Show loading dialog while fetching */}
      <LoadingDialog loading={loading}/>

      {/* Display generated course layout */}
      {courseLayout && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Generated Course Layout</h3>
          <pre>{JSON.stringify(courseLayout, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CreateCourse;
