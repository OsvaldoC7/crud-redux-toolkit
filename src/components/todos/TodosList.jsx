import { Link } from 'react-router-dom'
import Button from '../common/Button'
import React, { useEffect } from 'react'
import { useGetTodosQuery } from '../../features/api/apiSlice'

export default function TodosList() {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery()
  
  const handleDeleteTodo = ({ id }) => {
    
  }
  useEffect(() => {
    console.log(data, isLoading, isSuccess, isError, error);
  }, [data])

  let renderTodos
  if(isLoading) renderTodos = (
    <div>loading...</div>
  ) 
  else if(isError) renderTodos = (
    <div>Error</div>
  )
  else if(isSuccess) renderTodos = (
    data.map(todo => (
      <div key={todo.id} className='bg-gray-300 p-4 flex flex-row items-center justify-between'>
        <div className='flex flex-col'>
          <span className='font-bold text-lg text-gray-700'>{ todo.title }</span>
          <span className='font-normal text-gray-600'>{ todo.completed ? 'Completed' : 'No completed' }</span>
        </div>
        <div className='flex flex-row space-x-4'>
          <Link to={`/edit-todo/${todo.id}`}>
            <span className='fas fa-edit'></span>
          </Link>
          <Link to='#' onClick={() => handleDeleteTodo({ id: todo.id })}>
            <span className='fas fa-trash'></span>
          </Link>
        </div>
      </div>
    ))
  )

  return (
    <div>
      <Link to='/add-user'>
        <Button>Add todo</Button>
      </Link>
      <div className='grid gap-4 md:grid-cols-2'>
        { renderTodos }
      </div>
    </div>
  )
}
