import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'

function EditCourse() {
  return (
    <div className="flex-1">
      <div className='flex items-center justify-between mt-10 '>
      <strong>Add detail information about your course</strong>
      <Link to="lecture">
      <Button className="hover:text-blue-600" variant='link'>Go to Lecture Page</Button></Link>
      </div>
      <CourseTab/>
    </div>
  )
}

export default EditCourse