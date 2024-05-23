"use client"
import React, { useState } from 'react'
import RenameFileForm from '@/components/form/rename-file-form'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { File } from '@prisma/client'
import Canvas from './canvas'
import { Link, Save } from 'lucide-react'
import axios from 'axios'
import { cn } from '@/lib/utils'

enum Tabs {
  DOCUMENT = "Document",
  BOTH = "Both",
  CANVAS = "Canvas"
}

const Workspace = ({file}: {file: File}) => {
  const [canvasData, setCanvasData] = useState<any>([])
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CANVAS)
  const saveChanges = () => {
    axios.put(`/api/file/${file.id}/canvas`, {canvasData: JSON.stringify(canvasData, null, 2)})
  }
  return (
    <>
      <div className='border-b fixed h-14 w-full flex items-center justify-between z-10 bg-background px-5'>
        <div className='flex items-center'>
          <Logo />
          <RenameFileForm file={file} />
        </div>
        <div>
          {Object.values(Tabs).map((tab) => (
            <Button onClick={() => setActiveTab(tab)} variant={tab === activeTab ? 'secondary' : 'outline'} className='rounded-none'>{tab}</Button>
          ))}
        </div>
        <div className='space-x-3'>
          <Button onClick={() => saveChanges()} variant='outline'>Save <Save className='w-4 h-4 ml-2' /></Button>
          <Button variant='primary'>Share <Link className='w-4 h-4 ml-2' /></Button>
        </div>
      </div>
      <div className='flex'>
        <div className={cn(`w-[50%] h-screen pt-14`, activeTab === 'Canvas' && 'hidden', activeTab === 'Document' && 'w-[100%]')}>
          {/* <Editor /> */}
        </div>
        <div className={cn(`w-[50%] h-screen pt-14`, activeTab === 'Document' && 'hidden', activeTab === 'Canvas' && 'w-[100%]')}>
          <Canvas file={file} setCanvasData={setCanvasData} />
        </div>
      </div>
    </>
  )
}

export default Workspace
