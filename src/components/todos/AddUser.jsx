import { addUser } from '../../features/users/usersSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../common/Button'
import React from 'react'
import TextField from '../common/TextField'

export default function AddUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    email: ''
  })

  const handleAddUser = () => {
    setValues({ name: '', email: '' })
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    navigate('/')
  }

  return (
    <div className='mt-10 max-w-xl mx-auto space-y-4'>
      <TextField
        label="Name"
        value={values.name}
        onChange={e => setValues({...values, name: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Type your name...' }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={e => setValues({...values, email: e.target.value})}
        inputProps={{ type: 'email', placeholder: 'Type your email...' }}
      />
      <Button onClick={handleAddUser}>Save</Button>
    </div>
  )
}
