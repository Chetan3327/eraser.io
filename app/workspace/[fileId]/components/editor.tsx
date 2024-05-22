"use client"
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header'; 
import React, { useEffect } from 'react'

const Editor = () => {
  useEffect(() => {
    initEditor()
  }, [])
  const initEditor = () => {
    const editor = new EditorJS({
      tools: { 
        header: Header
      }, 
      holder: 'editorjs',
    })
  }
  return (
    <div>
      <div id='editorjs'></div>
    </div>
  )
}

export default Editor
