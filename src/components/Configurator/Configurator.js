import classes from './Configurator.module.scss'
import CarCustomizer from "../CarCustomizer/CarCustimozer";
import CarPreview from "../CarPreview/CarPreview";

const Configurator = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.LayoutInner}>
                <CarCustomizer />
                <CarPreview />
            </div>
        </div>
    )
}

export default Configurator
