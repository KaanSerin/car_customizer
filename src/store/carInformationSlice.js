import { createSlice } from '@reduxjs/toolkit'

export const carInformationSlice = createSlice({
    name: 'counter',
    initialState: {
        model: null,
        engine: null,
        gearbox: null,
        color: {
            name: '',
            color: '#000'
        },
    },
    reducers: {
        updateModel: (state, action) => {
            state.engine = null
            state.model = action.payload
        },
        updateEngine: (state, action) => {
            state.engine = action.payload
        },
        updateGearbox: (state, action) => {
            state.gearbox = action.payload
        },
        updateColor: (state, action) => {
            state.color = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateModel, updateEngine, updateGearbox, updateColor} = carInformationSlice.actions

export default carInformationSlice.reducer
