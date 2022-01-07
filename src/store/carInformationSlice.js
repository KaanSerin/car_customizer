import { createSlice } from '@reduxjs/toolkit'

export const carInformationSlice = createSlice({
    name: 'counter',
    initialState: {
        model: null,
        engine: null,
        gearbox: null,
        color: null,
        totalPrice: 0,
    },
    reducers: {
        updateModel: (state, action) => {
            if(state.engine){
                state.totalPrice -= state.engine.price
            }
            if(state.gearbox){
                state.totalPrice -= state.gearbox.price
            }
            state.engine = null
            state.gearbox = null

            if(state.model) state.totalPrice -= state.model.price
            state.model = action.payload
            state.totalPrice += action.payload.price
        },
        updateEngine: (state, action) => {
            if(state.engine) state.totalPrice -= state.engine.price
            state.engine = action.payload
            state.totalPrice += action.payload.price
        },
        updateGearbox: (state, action) => {
            if(state.gearbox) state.totalPrice -= state.gearbox.price
            state.gearbox = action.payload
            state.totalPrice += action.payload.price
        },
        updateColor: (state, action) => {
            if(state.color) state.totalPrice -= state.color.price
            state.color = action.payload
            state.totalPrice += action.payload.price
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateModel, updateEngine, updateGearbox, updateColor} = carInformationSlice.actions

export default carInformationSlice.reducer
