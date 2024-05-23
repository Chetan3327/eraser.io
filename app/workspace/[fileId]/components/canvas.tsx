import dynamic from "next/dynamic";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);
import { File } from '@prisma/client';
import { useTheme } from 'next-themes';


const Canvas = ({file, setCanvasData}: {file: File, setCanvasData: React.Dispatch<any>}) => {
  const initialData = file.whiteboard ? JSON.parse(file.whiteboard) : undefined
  console.log(initialData)
  const {theme} = useTheme()
  const finalTheme = theme === 'system' || theme === 'dark' ? 'dark' : 'light';
  return (
    <div style={{height: '800px'}}>
      <Excalidraw theme={finalTheme} 
        initialData={{
          elements: initialData
        }}
        onChange={(excalidrawElements, appState, files) => {
          setCanvasData(excalidrawElements)
        }}
      />
    </div>
  )
}

export default Canvas