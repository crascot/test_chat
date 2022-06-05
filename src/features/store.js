import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './message/messageSlice'
import peoplesSlice from './peoples/peoplesSlice'

export default configureStore({
  reducer: {
    peoples: peoplesSlice,
    message: messageSlice
  }
})