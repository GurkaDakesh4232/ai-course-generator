import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Addcourse from './_components/Addcourse'
import CourseCard from './_components/CourseCard';

function Dashboard() {
  return (
    <div>
    <div>
       <Addcourse/>
    </div>
    <div>
    <CourseCard/>
    </div>
    </div>
    
  )
}

export default Dashboard