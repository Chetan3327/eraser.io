import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='fixed top-0 border-b h-14 w-full ml-72 flex items-center z-10 bg-background'>
      <Button variant='primary'><Send className='w-4 h-4 mr-2'/>Invite</Button>
    </div>
  )
}

export default DashboardHeader
