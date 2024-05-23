import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import React from 'react'

const tabs = [
  {
    label: "All",
    active: true
  },
  {
    label: "Recents",
    active: false
  },
  {
    label: "Created by Me" ,
    active: false
  },
  {
    label: "Folders",
    active: false
  },
  {
    label: "Unsorted"
  }
]

const DashboardHeader = () => {
  return (
    <div className='fixed top-0 h-20 pl-72 w-full bg-background'>
      <div className='flex items-center h-full ml-5 justify-between pr-10'>
        <div className='space-x-2'>
          {tabs.map((tab) => (
            <Button variant={tab.active ? 'secondary' : 'ghost'} key={tab.label}>{tab.label}</Button>
          ))}
        </div>

        <div className='space-x-2'>
          <Button variant='primary'><Send className='w-4 h-4 mr-2'/>Invite</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
