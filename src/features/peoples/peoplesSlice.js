import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  contacts: [],
  data: false,
  isReady: false
}

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    getId: (state, action) => { state.id = action.payload },
    getContacts: (state, action) => { state.contacts = action.payload },
    checkData: (state, action) => { state.data = action.payload },
    switchData: (state) => { state.data = !state.data },
    ready: (state) => { state.isReady = !state.isReady }
  }
})

export const { getId, getContacts, checkData, switchData, ready } = peoplesSlice.actions

export default peoplesSlice.reducer