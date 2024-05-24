"use client"
import React, { useEffect } from 'react'
import {BlockNoteEditor, PartialBlock} from '@blocknote/core'
import {BlockNoteView, useCreateBlockNote} from '@blocknote/react'
import '@blocknote/react/style.css'
import debounce from 'lodash/debounce';
import { useTheme } from 'next-themes'
import axios from 'axios'
import { File } from '@prisma/client'

const Editor = ({file}: {file: File}) => {
  const {theme} = useTheme()
  const finalTheme = theme === 'system' || theme === 'dark' ? 'dark' : 'light';

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: file.document
    ? (JSON.parse(file.document) as PartialBlock[])
    : undefined
  })

  useEffect(() => {
    // const saveContentToLocalStorage = debounce(() => {
    //   localStorage.setItem('editorContent', JSON.stringify(editor.document));
    // }, 500)
    const saveEditorChanges = debounce(() => {
      axios.put(`/api/file/${file.id}/editor`, {editorData: JSON.stringify(editor.document, null, 2)})
    }, 10000)
    editor.onChange(() => {
      // saveContentToLocalStorage();
      saveEditorChanges()
    });

    return () => {
      // saveContentToLocalStorage.cancel()
      saveEditorChanges.cancel()
    };
  }, [editor]);

  return(
    <BlockNoteView 
      editor={editor}
      theme={finalTheme}
      style={{height: '100%'}}
    />
  )
}
export default Editor
