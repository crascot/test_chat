import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  contacts: [],
  currentContact: {}
}

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    getId: (state, action) => { state.id = action.payload },
    getContacts: (state, action) => { state.contacts = action.payload },
    getCurrentContact: (state, action) => { state.currentContact = action.payload }
  }
})

export const { getId, getContacts, getCurrentContact } = peoplesSlice.actions

export default peoplesSlice.reducer