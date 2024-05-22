import Logout from '@/components/auth/Logout'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/current-user'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const user = await currentUser()
  if(user){
    return redirect('/dashboard')
  }
  return (
    <div>
      {/* navbar */}
      <Logo />
      <Link href={'/login'}><Button variant={'ghost'}>Log in</Button></Link>
      <Link href={'/register'}><Button>Try Eraser <ArrowRight className='w-4 h-4 ml-2' /></Button></Link>
      <Logout />
      {/* hero */}

    </div>
  )
}

export default page
