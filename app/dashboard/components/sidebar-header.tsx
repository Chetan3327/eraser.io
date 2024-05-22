"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, LogOut, Settings, Users } from 'lucide-react'
import { Team, User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const SidebarHeader = ({teams, user, teamId}: {teams: Team[], user: User, teamId: string}) => {
  const router = useRouter()
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
          <DropdownMenuItem key={team.id} onClick={() => router.push(`/dashboard/${team.id}`)} className={cn("px-3 p-2 text-sm cursor-pointer w-full", team.id === teamId && "bg-blue-600 text-white")}>
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
        <DropdownMenuItem onClick={() => signOut()} className="px-3 p-2 text-sm cursor-pointer">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-3 p-2 text-sm cursor-pointer">
          <Avatar>
            <AvatarImage src={user.image || ''} alt='user profile' />
            {user.name && (<AvatarFallback>{user.name[0] + user.name[1]}</AvatarFallback>)}
          </Avatar>
          <div className='ml-2 flex flex-col'>
            <span className='text-sm font-bold text-white'>{user.name}</span>
            <span className='text-xs text-muted-foreground'>{user.email}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SidebarHeader
