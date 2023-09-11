import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetUserData = createAsyncThunk(
  'user/load',
  async (userId, thunkAPI) => {
    let url = `./userMockedDatas/${userId}/user.json`
    try {
      const response = await fetch(url)
      let data = await response.json()
      if (response.status === 200) {
        localStorage.setItem('userID', data.userData.id)
        localStorage.setItem('userLastName', data.userData.lastName)
        localStorage.setItem('userFirstName', data.userData.firstName)
        return { ...data }
      }
    } catch (error) {
      console.log('Error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
