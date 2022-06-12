import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  contacts: [],
}

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    getId: (state, action) => { state.id = action.payload },
    getContacts: (state, action) => { state.contacts = action.payload },
  }
})

export const { getId, getContacts } = peoplesSlice.actions

export default peoplesSlice.reducer