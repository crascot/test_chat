import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chat: [],
  message: '',
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    getChat: (state, action) => { state.chat.push(action.payload) },
    writeMessage: (state, action) => { state.message = action.payload },
  }
})

export const { getChat, writeMessage } = messageSlice.actions

export default messageSlice.reducer