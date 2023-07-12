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
      }
    },
  },
  extraReducers: (builder) => {
    // State management from api feedback
    builder
      .addCase(useUser.fulfilled, (state, { payload }) => {
        // console.log('payload', payload)
        return {
          ...state,
          userId: payload.userData.id,
          firstName: payload.userData.firstName,
          lastName: payload.userData.lastName,
          isFetching: false,
          successMessage: 'Login success',
        }
      })
      .addCase(useUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isFetching: false,
          isError: true,
          errorMessage: 'Login rejected',
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
