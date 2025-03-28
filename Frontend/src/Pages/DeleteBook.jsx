import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const {id}=useParams()
  
  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false);
      alert('An error happend')
      console.log(error);
      
    })

  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading?<Spinner/>:''}
      <div className='flex justify-center items-center'>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl mb-4'>Are You sure you want delete this book</h3>
        <button className='p-4 bg-red-600 text- m-8 w-full' onClick={handleDeleteBook}>Yes,Delete it</button>
      </div>
      </div>
    </div> 
  )
}

export default DeleteBook