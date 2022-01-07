import classes from './CarCustimozer.module.scss'
import Option from "./Option/Option";
import Color from "./Color/Color";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {updateModel, updateColor, updateEngine, updateGearbox} from '../../store/carInformationSlice'

const CarCustomizer = ({data}) => {
    const {models, engines, gearboxes, colors} = data
    const carInformation = useSelector((state) => state.carInformation)
    const dispatch = useDispatch()

    const compareTwoObjects = (obj1, obj2) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }

    const isEngineCompatible = (engineType) => {
        return carInformation?.model ? carInformation?.model.compatibleEngineTypes.includes(engineType) : true
    }

    const isGearboxCompatible = (gearboxId) => {
        return carInformation?.model ? carInformation?.model.compatibleGearboxIds.includes(gearboxId) : true
    }

    return (
        <div className={classes.CarCustomizer}>
            <div className={classes.Subtitle}>CKONFIG 5.1</div>

            <div className={classes.OptionsHeader}>Models</div>
            <div className={classes.Models}>
                {models.map(model =>
                    <Option selected={compareTwoObjects(model, carInformation.model)}
                                             method={() => dispatch(updateModel(model))} key={model.id}
                                             name={model.name}/>)}
            </div>

            <div className={classes.OptionsHeader}>Engines</div>
            <div className={classes.Engines}>
                {engines.map(engine =>
                    <Option selected={compareTwoObjects(engine, carInformation.engine)}
                                               disabled={!carInformation.model || !isEngineCompatible(engine.type)}
                                               method={() => dispatch(updateEngine(engine))} key={engine.id}
                                               name={engine.name}/>)}
            </div>

            <div className={classes.OptionsHeader}>Gearbox</div>
            <div className={classes.Gearboxes}>
                {gearboxes.map(gearbox =>
                    <Option selected={compareTwoObjects(gearbox, carInformation.gearbox)}
                                                  method={() => dispatch(updateGearbox(gearbox))} key={gearbox.id}
                                                  name={gearbox.name}
                                                  disabled={!isGearboxCompatible(gearbox.id)}/>)}
            </div>

            <div className={classes.OptionsHeader}>Color</div>
            <div className={classes.Colors}>
                {colors.map(color =>
                    <Color selected={compareTwoObjects(color, carInformation.color)}
                                            method={() => dispatch(updateColor(color))} key={color.color}
                                            color={color.color}
                                            disabled={!carInformation.color|| !isEngineCompatible(color)}/>)}
            </div>
        </div>
    )
}

export default CarCustomizer
