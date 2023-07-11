import { createAsyncThunk } from '@reduxjs/toolkit'

export const useUser = createAsyncThunk(
  'user/load',
  async ({ userId }, thunkAPI) => {
    let url = `../../userMockedDatas/${userId}/user.json`

    try {
      const response = await fetch(url)
      let data = await response.json()
      console.log('user data', data, response.status)
      if (response.status === 200) {
        return { ...data }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log('Error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
