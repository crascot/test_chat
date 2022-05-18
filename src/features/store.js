import { configureStore } from '@reduxjs/toolkit'
import peoplesSlice from './peoples/peoplesSlice'

export default configureStore({
  reducer: {
    peoples: peoplesSlice
  }
})