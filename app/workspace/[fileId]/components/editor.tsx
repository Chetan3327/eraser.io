"use client"
import React, { useEffect } from 'react'
import {BlockNoteEditor, PartialBlock} from '@blocknote/core'
import {BlockNoteView, useCreateBlockNote} from '@blocknote/react'
import '@blocknote/react/style.css'
import debounce from 'lodash/debounce';
import { useTheme } from 'next-themes'

interface EditorProps{
  onChange?: (value: string) => void
  initialContent?: string
  editable?: boolean
}

const Editor = ({onChange, editable, initialContent}: EditorProps) => {
  const {theme} = useTheme()
  const finalTheme = theme === 'system' || theme === 'dark' ? 'dark' : 'light';

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
    ? (JSON.parse(initialContent) as PartialBlock[])
    : undefined
  })

  useEffect(() => {
    const saveContentToLocalStorage = debounce(() => {
      localStorage.setItem('editorContent', JSON.stringify(editor.document));
    }, 500)

    editor.onChange(() => {
      saveContentToLocalStorage();
    });

    return () => {
      saveContentToLocalStorage.cancel()
    };
  }, [editor]);

  return(
    <BlockNoteView 
      editor={editor}
      editable={editable}
      theme={finalTheme}
      style={{height: '100%'}}
    />
  )
}
export default Editor
