import { editUser } from '../../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../common/Button'
import React, { useState } from 'react'
import TextField from '../common/TextField'

export default function EditUser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const users = useSelector(store => store.users)
  const user = users.filter(user => user.id === id)
  const { name, email } = user[0]

  const [values, setValues] = useState({ name, email })

  const handleEditUser = () => {
    setValues({ name: '', email: '' })
    dispatch(editUser({
      id: id,
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
      <Button onClick={handleEditUser}>Update</Button>
    </div>
  )
}
