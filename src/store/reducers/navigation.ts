// src/store/reducers/navigation.js
import { createSlice } from '@reduxjs/toolkit'

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentThreadId: null
  },
  reducers: {
    navigateToThreadDetail: (state, action) => {
      state.currentThreadId = action.payload
    }
  }
})

export const { navigateToThreadDetail } = navigationSlice.actions
export default navigationSlice.reducer
