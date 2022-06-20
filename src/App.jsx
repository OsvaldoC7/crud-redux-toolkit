import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddTodo from './components/todos/AddTodo'
import TodosList from './components/todos/TodosList'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import UserList from './components/users/UserList'
import Home from './Views/Home'

function App() {

  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <Link to='/'>
        <h1 className='text-center font-bold text-2xl text-gray-700 hover:text-gray-500 py-4'>Redux toolkit & RTK Query</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users-list' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
        <Route path='/todos-list' element={<TodosList />} />
        <Route path='/add-todo' element={<AddTodo />} />
      </Routes>
    </div>
  )
}

export default App
