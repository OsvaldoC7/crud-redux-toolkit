import { addUser } from '../../features/users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../common/Button'
import React from 'react'
import TextField from '../common/TextField'
import { useAddTodoMutation } from '../../features/api/apiSlice'

export default function AddTodo() {
  const navigate = useNavigate()
  const [addTodo] = useAddTodoMutation()
  const [values, setValues] = useState({
    userId: '',
    title: '',
    completed: false
  })

  const handleAddTodo = () => {
    addTodo({
      userId: values.userId,
      title: values.title,
      completed: values.completed
    })
    setValues({ userId: '', title: '', completed: false })
    navigate('/todos-list')
  }

  return (
    <div className='mt-10 max-w-xl mx-auto space-y-4'>
      <TextField
        label="User id"
        value={values.userId}
        onChange={e => setValues({...values, userId: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Type your id...' }}
      />
      <TextField
        label="Title"
        value={values.email}
        onChange={e => setValues({...values, title: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Todo...' }}
      />
      <Button onClick={handleAddTodo}>Save</Button>
    </div>
  )
}
