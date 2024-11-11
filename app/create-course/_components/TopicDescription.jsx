import React from 'react';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/text'; 
import { UserInputContext } from '../../_context/UserInputContext';
import { useContext } from 'react';







function TopicDescription() {

  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange=(fieldname,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldname]:value
    }))

  }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* input Topic */}
        
        <div className='mt-5 '>
          <label className='font-bold flex gap-2'>
          <img src="/focus.png" alt="Difficulty Level" className="w-5 h-5" />
            Write the topic for which you want to generate a course(e.g.,Python course ,yoga , etc.): </label>
            <Input placeholder={'Topic'}
             defaultValue={userCourseInput?.topic}
              onChange={(e)=>handleInputChange('topic',e.target.value)}
            />
        </div>

        <div className='mt-5 '>
          <label className='font-bold flex gap-2'>
          <img src="/writing.png" alt="Difficulty Level" className="w-5 h-5" />
          Tell us more about your course what you what to include the course</label>
          <Textarea placeholder='About Your Course'
            defaultValue={userCourseInput?.description}
             onChange={(e)=>handleInputChange('description',e.target.value)}
             />
          
        </div>

        {/*  Text Area Desc*/}
    </div>
  )
}

export default TopicDescription