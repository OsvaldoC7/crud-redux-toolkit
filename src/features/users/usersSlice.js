import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Panchito', email: 'panchito@email.com' },
  { id: '2', name: 'Paquita', email: 'paquita@email.com' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },

    editUser: (state, action) => {
      const { id, name, email } = action.payload
      const user = state.find(user => user.id === id)
      if (user) {
        user.name = name
        user.email = email
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload
      const user = state.find(user => user.id === id)
      if (user) {
        return state.filter(user => user.id !== id)
      }
    }
  }
})

export const { addUser, editUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer
