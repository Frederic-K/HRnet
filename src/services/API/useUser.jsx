import { createAsyncThunk } from '@reduxjs/toolkit'

export const useUser = createAsyncThunk(
  'user/load',
  async ({ userId }, thunkAPI) => {
    console.log('api')
    let url = `./userMockedDatas/${userId}/user.json`

    try {
      const response = await fetch(url)
      let data = await response.json()
      console.log('user data', data, response.status)
      return { ...data }
    } catch (error) {
      console.log('Error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
