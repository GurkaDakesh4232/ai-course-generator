import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  }  from '../../../components/ui/alert-dialog';
  import Image from 'next/image';

function LoadingDialog({loading}) {
  return (
    <div>
        <AlertDialog open={loading}>

  <AlertDialogContent>
    <AlertDialogHeader>
    
      <AlertDialogDescription>
       
      </AlertDialogDescription>
    </AlertDialogHeader>
   <div className='flex flex-col items-center py-10'>
    <Image src={'/loading.gif'} width={100} height={100} alt="new"/>
    <h2>Please  wait..AI working on your Course</h2>
   </div>
  </AlertDialogContent>
</AlertDialog>


    </div>
  )
}

export default LoadingDialog