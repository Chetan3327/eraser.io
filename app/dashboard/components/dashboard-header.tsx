import MobileSidebar from '@/components/mobile-toggle'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Menu, Send } from 'lucide-react'
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

const DashboardHeader = ({teamId}: {teamId: string}) => {
  return (
    <div className='fixed top-0 h-20 lg:pl-72 w-full bg-background'>
      <div className='flex items-center h-full lg:pl-5 justify-between lg:pr-10'>
        <div className='flex space-x-2 items-center'>
          <MobileSidebar teamId={teamId} />
          {tabs.map((tab) => (
            <Button variant={tab.active ? 'secondary' : 'ghost'} className='lg:flex hidden' key={tab.label}>{tab.label}</Button>
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
