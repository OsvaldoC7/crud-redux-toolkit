import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex flex-col items-center'>
        <span className='text-lg font-semibold text-gray-600'>Redux Toolkit</span>
        <Link to='/users-list'>
          <Button>Users CRUD</Button>
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-lg font-semibold text-gray-600'>RTK Query</span>
        <Link to='/todos-list'>
          <Button>Todos CRUD</Button>
        </Link>
      </div>
    </div>
  )
}
