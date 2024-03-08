import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>


  <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
<div className='flex-1'>
     <Link to="/" className=' font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
        via-purple-500 to-pink-500 rounded-lg text-white'>Paulos's</span>
        Blog 
    </Link>

    <p className='text-sm mt-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio ex sed, repellendus rerum quos praesentium vitae 
    </p>
  </div>

  <div className='flex-1'>
    <form className='flex flex-col gap-4'>
      <div className=''>
        <Label value='Your UserName'/>
         <TextInput
         type='text'
         placeholder='Username'
         id='Username'/>
      </div>
      <div className=''>
        <Label value='Your Email'/>
         <TextInput
         type='text'
         placeholder='example@gmail.com'
         id='email'/>
      </div>
      <div className=''>
        <Label value='Your Password'/>
         <TextInput
         type='text'
         placeholder='Password'
         id='password'/>
      </div>
      <Button gradientDuoTone='purpleToPink' type='submit'>
        Submit
        </Button>
    </form>
    <div className=''>
   <span>Have an account?</span>
   <Link to='/sign-in' className='text-blue-500'>
    Sign In
   </Link>
    </div>
  </div>
</div>
    </div>
  )
}
