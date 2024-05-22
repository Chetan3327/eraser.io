import React from 'react'
import Logo from '@/components/logo'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, LogOut, Settings, Users } from 'lucide-react'
import { Team } from '@prisma/client'

const SidebarHeader = ({teams}: {teams: Team[]}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full text-md rounded-lg font-bold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
          {teams[0].name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {teams.map((team) => {
          return(
          <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
            {team.name}
          </DropdownMenuItem>)
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
          <Users className="h-4 w-4 mr-2" />
          Join or Create Team
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
          <Logo />
          <div className='ml-2 flex flex-col'>
            <span className='text-sm font-bold text-white'>Chetan Chauhan</span>
            <span className='text-xs text-muted-foreground'>chauhanchetan12789@gmail.com</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SidebarHeader
