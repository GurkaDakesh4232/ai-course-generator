import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../components/ui/select';
import { Input } from '../../../components/ui/input';
import { UserInputContext } from '../../_context/UserInputContext';
import { useContext } from 'react';


function SelectOption() {

    const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange=(fieldname,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldname]:value
    }))

  }
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm flex gap-2'> <img src="/mobile-signal.png" alt="Difficulty Level" className="w-5 h-5" />Difficulty Level</label>
                   
                    <Select onValueChange={(value)=>handleInputChange('level',value)}
                     defaultValue={userCourseInput?.level}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner </SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className='text-sm flex gap-2'> <img src="/chronometer.png" alt="Difficulty Level" className="w-5 h-5" />Course Duration</label>
                    <Select onValueChange={(value)=>handleInputChange('duration',value)}
                     defaultValue={userCourseInput?.duration}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hours">1 Hours </SelectItem>
                            <SelectItem value="2 Hours">2 Hours</SelectItem>
                            <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


                <div>
                    <label className='text-sm flex gap-2'> <img src="/youtube.png" alt="Difficulty Level" className="w-5 h-5" />Add Video</label>
                    <Select onValueChange={(value)=>handleInputChange('displayvideo',value)}
                    defaultValue={userCourseInput?.displayvideo}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes ">Yes </SelectItem>
                            <SelectItem value="No">No</SelectItem>
        
                        </SelectContent>
                    </Select>
                </div>


                <div>
                    <label className='text-sm flex gap-2'> <img src="/chapter.png" alt="Difficulty Level" className="w-5 h-5" />Noof Chapters</label>
                    <Input type='number'
                        onChange={(event)=>handleInputChange('noofchapters',event.target.value)}
                        defaultValue={userCourseInput?.noofchapters}
                    />
                </div>

            </div>
        </div>
    )
}

export default SelectOption