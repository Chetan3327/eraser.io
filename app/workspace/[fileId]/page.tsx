import RenameFileForm from '@/components/form/rename-file-form'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { Link } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async ({params}: {params: {fileId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  const file = await prisma.file.findUnique({
    where: {
      id: params.fileId
    }
  })
  if(!file){
    return redirect('/dashboard')
  }
  return (
    <>
      {/* workspace header */}
      <div className='border-b h-14 w-full flex items-center justify-between z-10 bg-background px-5'>
        <div className='flex items-center'>
          <Logo />
          <RenameFileForm file={file} />
        </div>

        <div>

        </div>

        <div>
          <Button variant='primary'>Share <Link className='w-4 h-4 ml-2' /></Button>
        </div>
      </div>

      <div>
        <div>editor</div>
        <div>canvas</div>
      </div>
    </>
  )
}

export default page
