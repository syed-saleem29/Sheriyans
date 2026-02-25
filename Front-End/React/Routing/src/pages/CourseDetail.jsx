import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const param = useParams()

  return (
    <div className=" min-h-scree absolute top-1/2 left-1/2 underline text-7xl -translate-1/2">
      {param.id} Courses Details
    </div>
  )
}

export default CourseDetail