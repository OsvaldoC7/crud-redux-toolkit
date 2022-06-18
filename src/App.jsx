import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodosList from './components/todos/TodosList'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import UserList from './components/users/UserList'

function App() {

  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700 py-4'>CRUD redux toolkit</h1>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
        <Route path='/todos-list' element={<TodosList />} />
      </Routes>
    </div>
  )
}

export default App
