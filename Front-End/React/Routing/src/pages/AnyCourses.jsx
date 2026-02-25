import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourses = () => {

    const params = useParams()
    console.log(params)

  return (
    <div className=" min-h-scree absolute top-1/2 left-1/2 underline text-7xl -translate-1/2">
      {params.id} Courses
    </div>
  )
}

export default AnyCourses