import classes from './CarPreview.module.scss'
import { useSelector } from 'react-redux'

const CarPreview = () => {
    const carInformation = useSelector((state) => state.carInformation)

    return (
        <div className={classes.CarPreview}>
            <div className={classes.Summary}>Summary</div>
            <div className={classes.Preview}>
                <div className={classes.Car}>
                    <i className='fas fa-car' style={{color: carInformation?.color?.color || '#000' }}/>
                </div>
            </div>

            <div className={classes.InformationArea}>
                <div className={classes.Information}>
                    <div>Model</div>
                    <div>{carInformation?.model?.name}</div>
                </div>
                <div className={classes.Information}>
                    <div>Engine</div>
                    <div>{carInformation?.engine?.name}</div>
                </div>
                <div className={classes.Information}>
                    <div>Gearbox</div>
                    <div>{carInformation?.gearbox?.name}</div>
                </div>
                <div className={classes.Information}>
                    <div>Color</div>
                    <div>{carInformation?.color?.name}</div>
                </div>
                <div className={classes.Information}>
                    <div>Price</div>
                    <div>{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(carInformation?.totalPrice)}</div>
                </div>
            </div>
        </div>
    )
}

export default CarPreview
