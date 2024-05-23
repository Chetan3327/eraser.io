import CreateTeamForm from '@/components/form/create-team-form'
import Logo from '@/components/logo'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center pt-[10rem]'>
        <h3 className='text-3xl md:text-5xl font-bold text-center'>What should we call your team?</h3>
        <p className='text-muted-foreground my-5'>You can always change this later from settings.</p>
        <CreateTeamForm />
      </div>
      <div className="absolute flex items-center space-x-2 top-20 left-20">
        <Logo />
        <h3 className="font-bold text-3xl">eraser</h3>
      </div>
    </>
  )
}

export default page
