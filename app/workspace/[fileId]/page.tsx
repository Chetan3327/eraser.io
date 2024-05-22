import React from 'react'

const page = ({params}: {params: {fileId: string}}) => {
  return (
    <div>
      {params.fileId}
    </div>
  )
}

export default page
