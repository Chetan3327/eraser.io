"use client"
import React from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
import { useTheme } from 'next-themes';

const Canvas = () => {
  const {theme} = useTheme()
  const finalTheme = theme === 'system' || theme === 'dark' ? 'dark' : 'light';
  return (
    <div style={{height: '800px'}}>
      <Excalidraw theme={finalTheme} />
    </div>
  )
}

export default Canvas
