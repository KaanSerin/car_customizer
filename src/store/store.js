import { configureStore } from '@reduxjs/toolkit'
import carInformationReducer from './carInformationSlice'

export default configureStore({
    reducer: {
        carInformation: carInformationReducer
    }
})
