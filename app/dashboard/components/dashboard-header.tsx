import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='fixed top-0 border-b h-14 ml-72 w-full z-10 bg-background'>
      <div className='flex items-center h-full ml-5'>
        <ModeToggle />
        {/* <Button variant='primary'><Send className='w-4 h-4 mr-2'/>Invite</Button> */}
      </div>
    </div>
  )
}

export default DashboardHeader
