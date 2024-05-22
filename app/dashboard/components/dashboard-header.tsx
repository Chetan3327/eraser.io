import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='h-14 border-b w-full'>
      <div className='flex h-full items-center justify-end'>
        <div className='space-x-3 flex'>
          <Input className='focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search' />
          <Button variant='primary'><Send className='w-4 h-4 mr-2'/>Invite</Button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
