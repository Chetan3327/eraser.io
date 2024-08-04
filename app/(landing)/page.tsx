import Logout from '@/components/auth/Logout'
import { NavBar } from '@/components/home/navbar'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/current-user'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import demo from '@/eraser-workspace-dark.png'

const page = async () => {
  const user = await currentUser()
  if(user){
    return redirect('/dashboard')
  }
  return (
    <div>
      <div className="flex justify-between space-x-2 pt-10 px-5 md:px-36">
        <div className='flex items-center'>
          <Logo />
          <h3 className="font-bold text-3xl mr-10">eraser</h3>
          <div className="hidden md:flex">
            <NavBar />
          </div>
        </div>

        <div className='space-x-3'>
          <Link href={'/login'}><Button className='ml-auto' variant={'ghost'}>Log in</Button></Link>
          <Link href={'/register'}><Button>Try Eraser <ArrowRight className='w-4 h-4' /></Button></Link>
        </div>
      </div>

      <div className='container text-center justify-center py-20 md:py-32'>
        <h2 className="text-3xl md:text-6xl font-bold">
          <span className="bg-gradient-to-b from-blue-300/60 to-blue-300 text-transparent bg-clip-text">
            Documents & diagrams{" "}
          </span>
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold">
          for engineering teams
        </h2>
        <h2 className="text-xl md:text-3xl my-5 text-muted-foreground">
          All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
        </h2>
        <Link href={'/register'}><Button>Try Eraser <ArrowRight className='w-4 h-4 ml-2' /></Button></Link>
        <div className="shadow"></div>
      </div>


      <div className='z-[50] container grid place-content-center'>
        <Image src={demo} height={1000} width={1000} className='p-5 rounded-lg bg-gray-800' alt='demo' />
      </div>
    </div>
  )
}

export default page
