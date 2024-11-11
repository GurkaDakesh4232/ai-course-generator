import Image from 'next/image'
import React, { useContext } from 'react'
import CategoryList from '../../_shared/CategoryList';
import { UserInputContext } from '../../_context/UserInputContext';




function SelectCategory() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext)

  const handleCategoryChange=(category)=>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }))

  }
    return (
      <div className='px-10 md:px-20'>
         <h2 className='my-4 font-bold'>Select the course Category</h2>
    
      <div className='grid grid-cols-3 gap-10 '>
          {CategoryList.map((item, index) => (
              <div 
                key={item.id || index}  // Use a unique key (preferably item.id)
                className={`flex flex-col p-4 border items-center rounded-xl hover:border-purple-600 hover:bg-blue-50 cursor-pointer${userCourseInput?.category==item.name&&'border-purple-500 bg-blue-100'}`}
                onClick={()=>handleCategoryChange(item.name)}
                >
                  <Image src={item.icon} width={50} height={50} alt="new"/>
                  <h2>{item.name}</h2>
              </div>
          ))}
      </div>
      </div>
    );
  }
  

export default SelectCategory 