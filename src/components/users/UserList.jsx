import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../common/Button'
import React from 'react'
import { deleteUser } from '../../features/users/usersSlice'

export default function UserList () {
  const users = useSelector(store => store.users)
  const dispatch = useDispatch()

  const handleDeleteUser = ({ id }) => {
    dispatch(deleteUser({ id }))
  }

  const renderCard = () => users.map(user => (
    <div key={user.id} className='bg-gray-300 p-4 flex flex-row items-center justify-between'>
      <div className='flex flex-col'>
        <span className='font-bold text-lg text-gray-700'>{ user.name }</span>
        <span className='font-normal text-gray-600'>{ user.email }</span>
      </div>
      <div className='flex flex-row space-x-4'>
        <Link to={`/edit-user/${user.id}`}>
          <span className='fas fa-edit'></span>
        </Link>
        <Link to='#' onClick={() => handleDeleteUser({ id: user.id })}>
          <span className='fas fa-trash'></span>
        </Link>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to='/add-user'>
        <Button>Add user</Button>
      </Link>
      <div className='grid gap-4 md:grid-cols-2'>
        {
          users.length ? renderCard() : <p className='text-center col-span-2 text-gray-700 font-semibold'>No users</p>
        }
      </div>
    </div>
  )
}
