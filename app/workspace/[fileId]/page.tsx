import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Logo from '@/components/logo'
import RenameFileForm from '@/components/form/rename-file-form'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Editor from './components/editor'
import Canvas from './components/canvas'

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
      <div className='border-b fixed h-14 w-full flex items-center justify-between z-10 bg-background px-5'>
        <div className='flex items-center'>
          <Logo />
          <RenameFileForm file={file} />
        </div>

        <div>
          <Button variant='outline' className='rounded-none'>Document</Button>
          <Button variant='secondary' className='rounded-none'>Both</Button>
          <Button variant='outline' className='rounded-none'>Canavs</Button>
        </div>

        <div>
          <Button variant='primary'>Share <Link className='w-4 h-4 ml-2' /></Button>
        </div>
      </div>

      <div className='flex'>
        <div className='w-[50%] h-screen pt-14'>
          {/* <Editor /> */}
        </div>
        <div className='w-[50%] h-screen pt-14'>
          {/* <Canvas /> */}
        </div>
      </div>
    </>
  )
}

export default page
