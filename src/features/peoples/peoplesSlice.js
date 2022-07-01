import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  contacts: [],
  data: false
}

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    getId: (state, action) => { state.id = action.payload },
    getContacts: (state, action) => { state.contacts = action.payload },
    checkData: (state) => { state.data = !state.data }
  }
})

export const { getId, getContacts, checkData } = peoplesSlice.actions

export default peoplesSlice.reducer