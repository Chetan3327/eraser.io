import CreateFileButton from '@/components/form/create-file-form'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { TeamWithFiles } from '@/types'
import { File, Team } from '@prisma/client'
import axios from 'axios'
import { Archive, Computer, Flag, Layers, Lock } from 'lucide-react'
import React from 'react'

const FooterItems = [
  {
    label: "Getting Started",
    icon: Flag
  },
  {
    label: "Team Templates",
    icon: Layers
  },
  {
    label: "Github Sync",
    icon: Computer
  },
  {
    label: "Private Files",
    icon: Lock
  },
  {
    label: "Archive",
    icon: Archive
  },
]

const SidebarFooter = ({team}: {team: TeamWithFiles }) => {

  return (
    <div className='space-y-5 px-2'>
      <div className='flex flex-col mx-1'>
        {FooterItems.map((item) => {
          return(
            <Button key={item.label} size='sm' variant='ghost' className='text-left text-sm py-0'><item.icon className='w-4 h-4 ml-0 mr-2' /> {item.label} <span  className='mr-auto'/> </Button>
          )
        })}
      </div>
      
      <CreateFileButton team={team} />

      <div className='flex flex-col space-y-2'>
        <Progress value={team.files.length * 20} />
        <span className='text-sm'><b>{team.files.length}</b> out <b>5</b> files used</span>
        <span className='text-sm'>Upgrade your plan for unlimited access.</span>
      </div>
    </div>
  )
}

export default SidebarFooter
