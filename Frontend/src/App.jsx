import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import DeleteBook from './Pages/DeleteBook'
import EditBook from './Pages/EditBook'
import ShowBook from './Pages/ShowBook'
import Home from './Pages/Home'
import Header from './components/Header/header'


const App = () => {
  return (
    <div>
        <Header/>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/books/create' element={<CreateBook/>}></Route>
  <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
  <Route path='/books/edit/:id' element={<EditBook/>}></Route>
  <Route path='/books/details/:id' element={<ShowBook/>}></Route>
</Routes>
</div>
  )
}

export default App