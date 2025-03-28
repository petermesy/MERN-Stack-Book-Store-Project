import React from 'react'
import BackButton from '../BackButton'
import { Link } from 'react-router-dom'


const header = () => {
  return (
    <div className='bg-sky-300 hover:bg-sky-600 px-8 py-4  mt-0 ml-0'>
        <header>        
           <Link to={'/'} className='float-right underline-no text-white'>Home</Link>

        <h1 className='text-white text-2xl font-bold'>Book Store App
</h1>
        </header>
      </div>
  )
}

export default header