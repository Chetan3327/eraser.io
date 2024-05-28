import { Menu } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from './ui/button'
import Sidebar from '@/app/dashboard/components/sidebar'

const MobileSidebar = ({teamId}: {teamId: string}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' className='lg:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 flex gap-0 border-0 w-72'>
        <Sidebar teamId={teamId} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar