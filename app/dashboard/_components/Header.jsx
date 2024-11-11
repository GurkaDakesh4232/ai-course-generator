import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
    <Image src={'/logo.svg'} width={50} height={50} alt='new'/>
    <h1 className="text-1xl font-bold text-gray-500 sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl">
  Welcome to Your Learning Platform
</h1>

    <UserButton/>
    </div>
  )
}

export default Header