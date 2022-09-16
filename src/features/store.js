import { configureStore } from '@reduxjs/toolkit'
import adaptiveSlice from './adaptive/adaptiveSlice'
import messageSlice from './message/messageSlice'
import peoplesSlice from './peoples/peoplesSlice'

export default configureStore({
  reducer: {
    peoples: peoplesSlice,
    message: messageSlice,
    adaptive: adaptiveSlice,
  }
})