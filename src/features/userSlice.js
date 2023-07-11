import { createSlice } from '@reduxjs/toolkit'
import { useUser } from '../services/API/useUser'

const initialState = {
  userId: localStorage.getItem('userId') ?? null,
  firstName: '',
  lastName: '',
  isFetching: false,
  isUpdated: false,
  isError: false,
  errorMessage: '',
  successMessage: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // State management from actions
    clearState: (state) => {
      return {
        ...state,
        userId: '',
        firstName: '',
        lastName: '',
        isFetching: false,
        isUpdated: false,
        isError: false,
        errorMessage: '',
        successMessage: '',
        auth: false,
      }
    },
    logout: (state) => {
      localStorage.clear()
      return {
        ...state,
        userId: '',
        firstName: '',
        lastName: '',
        isFetching: false,
        isUpdated: false,
        isError: false,
        errorMessage: '',
        successMessage: '',
        auth: false,
      }
    },
  },
  extraReducers: (builder) => {
    // State management from api feedback
    builder
      .addCase(useUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          userId: payload.body.userId,
          firstName: payload.body.firstName,
          lastName: payload.body.lastName,
          isFetching: false,
          successMessage: payload.message,
          auth: true,
        }
      })
      .addCase(useUser.rejected, (state, { payload }) => {
        console.log('payload', payload)
        return {
          ...state,
          isFetching: false,
          isError: true,
          errorMessage: payload.message,
          auth: false,
        }
      })
      .addCase(useUser.pending, (state) => {
        return {
          ...state,
          isFetching: true,
        }
      })
  },
})
// Actions to manage state
export const { clearState, logout } = userSlice.actions
// Grab states
export const userSelector = (state) => state.user

export default userSlice.reducer
