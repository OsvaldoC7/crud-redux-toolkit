import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './features/api/apiSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },

  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
})

setupListeners(store.dispatch)
