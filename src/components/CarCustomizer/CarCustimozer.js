import classes from './CarCustimozer.module.scss'
import Option from "./Option/Option";
import Color from "./Color/Color";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {updateModel, updateColor, updateEngine, updateGearbox} from '../../store/carInformationSlice'

const CarCustomizer = () => {
    const carInformation = useSelector((state) => state.carInformation)
    const dispatch = useDispatch()

    // I will be using placeholder values for the models, engines, and gearboxes in this example.
    const MODELS = [
        {
            id: 1,
            name: 'PRO RS3',
            compatibleEngineTypes: [1, 2, 3, 4],
            compatibleGearboxIds: [2],
            price: 40000
        },
        {
            id: 2,
            name: 'UBER RS2',
            compatibleEngineTypes: [1, 3, 4],
            compatibleGearboxIds: [2],
            price: 30000
        },
        {
            id: 3,
            name: 'STANDARD',
            compatibleEngineTypes: [2, 3],
            compatibleGearboxIds: [1, 2],
            price: 20000
        },
        {
            id: 4,
            name: 'WK',
            compatibleEngineTypes: [4],
            compatibleGearboxIds: [1],
            price: 10000
        },
    ];

    const ENGINES = [
        {
            id: 1,
            name: '5.2L 532BHP',
            type: 1,
            price: 30000
        },
        {
            id: 2,
            name: '4.2L 443BHP',
            type: 2,
            price: 20000
        },
        {
            id: 3,
            name: '3.6L 374BHP',
            type: 3,
            price: 1000
        },
        {
            id: 4,
            name: '2.0L 166BHP',
            type: 4,
            price: 500
        },
    ];

    const GEARBOXES = [
        {
            id: 1,
            name: 'Manual',
            price: 1000
        },
        {
            id: 2,
            name: 'Automatic',
            price: 4000
        },
    ];

    const COLORS = [
        {
            name: 'Rosso',
            color: '#ff1616',
            price: 500,
        },
        {
            name: 'Grey',
            color: '#cecece',
            price: 300,
        },
        {
            name: 'Light Brown',
            color: '#735747',
            price: 300,
        },
        {
            name: 'Black',
            color: '#1c1c1c',
            price: 500,
        },
    ];

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
                {MODELS.map(model =>
                    <Option selected={compareTwoObjects(model, carInformation.model)}
                                             method={() => dispatch(updateModel(model))} key={model.id}
                                             name={model.name}/>)}
            </div>

            <div className={classes.OptionsHeader}>Engines</div>
            <div className={classes.Engines}>
                {ENGINES.map(engine =>
                    <Option selected={compareTwoObjects(engine, carInformation.engine)}
                                               disabled={!carInformation.model || !isEngineCompatible(engine.type)}
                                               method={() => dispatch(updateEngine(engine))} key={engine.id}
                                               name={engine.name}/>)}
            </div>

            <div className={classes.OptionsHeader}>Gearbox</div>
            <div className={classes.Gearboxes}>
                {GEARBOXES.map(gearbox =>
                    <Option selected={compareTwoObjects(gearbox, carInformation.gearbox)}
                                                  method={() => dispatch(updateGearbox(gearbox))} key={gearbox.id}
                                                  name={gearbox.name}
                                                  disabled={!isGearboxCompatible(gearbox.id)}/>)}
            </div>

            <div className={classes.OptionsHeader}>Color</div>
            <div className={classes.Colors}>
                {COLORS.map(color =>
                    <Color selected={compareTwoObjects(color, carInformation.color)}
                                            method={() => dispatch(updateColor(color))} key={color.color}
                                            color={color.color}
                                            disabled={!carInformation.color|| !isEngineCompatible(color)}/>)}
            </div>
        </div>
    )
}

export default CarCustomizer
