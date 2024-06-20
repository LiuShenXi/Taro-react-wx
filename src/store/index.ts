// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './reducers/navigation'

const store = configureStore({
  reducer: {
    navigation: navigationReducer
  }
})

export default store
