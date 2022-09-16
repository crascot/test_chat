import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    size: 'medium'
}

export const adaptiveSlice = createSlice({
    name: 'adaptive',
    initialState,
    reducers: {
        setSize: (state) => {
            window.innerWidth <= 1030
                ?
                state.size = 'small'
                :
                state.size = 'medium'
        },
    }
})

export const { setSize } = adaptiveSlice.actions

export default adaptiveSlice.reducer