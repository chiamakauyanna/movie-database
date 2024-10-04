import React from 'react'
import { FaVideo } from 'react-icons/fa6'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <FaVideo className='text-yellow-500 text-3xl'/>
      <h2 className='text-3xl text-yellow-500'>Moviez</h2>
    </div>
  )
}

export default Logo