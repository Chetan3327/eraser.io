"use client"
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
      <ModeToggle />
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  )
}

export default page
