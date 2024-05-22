"use client"
import React from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import { TeamWithFiles } from '@/types'
import { useRouter } from 'next/navigation'

const CreateFileButton = ({team}: {team: TeamWithFiles }) => {
  const router = useRouter()
  const createFile = async () => {
    if(team.files.length === 5){
      // show pricing modal
      return
    }

    const res = await axios.post(`/api/file/`, {teamId: team.id})    
    router.push(`/workspace/${res.data.id}`)
  }
  return (
    <Button onClick={() => createFile()} variant='primary' className='w-full'>New File</Button>
  )
}

export default CreateFileButton
