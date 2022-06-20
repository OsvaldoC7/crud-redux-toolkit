import { Link } from 'react-router-dom'
import Button from '../common/Button'
import React, { useEffect } from 'react'
import { useGetTodosQuery, useDeleteTodoMutation, useUpdateTodoMutation } from '../../features/api/apiSlice'

export default function TodosList() {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  
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
          <span onClick={() => console.log(data)} className='font-bold text-lg text-gray-700'>{ todo.title }</span>
          <span className='font-normal text-gray-600'>
            { 
              todo.completed 
              ? <span className='fa fa-check'></span>
              : <span className='fa fa-times'></span>
            }
          </span>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
          <input type='checkbox' checked={todo.completed} onChange={() => updateTodo({ ...todo, completed: !todo.completed })} />
          <span onClick={() => deleteTodo({ id: todo.id })}>
            <span className='fas fa-trash'></span>
          </span>
        </div>
      </div>
    ))
  )

  return (
    <div>
      <Link to='/add-todo'>
        <Button>Add todo</Button>
      </Link>
      <div className='grid gap-4 md:grid-cols-2'>
        { renderTodos }
      </div>
    </div>
  )
}
