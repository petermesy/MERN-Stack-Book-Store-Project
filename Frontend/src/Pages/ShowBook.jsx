import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [book,setBook]=useState({});
  const[loading,setLoading]=useState(false);
  const {id}=useParams();
  axios.get(`http://localhost:5555/books/${id}`)
  .then((res)=>{
    setBook(res.data);
    setLoading(false)
  })
  .catch((error)=>{
    console.log(error);
  });
  
  return (
    <div className='p-4 justify-content-center '>
      <BackButton/>
      <h1 className='text-3x1 my-4'> show Book</h1>
      {loading?(
        <Spinner/>
      ):(<div className='flex justify-center items-center'>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-flex p-4 mx-auto'>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Id</span>
            <span>{book.id}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook