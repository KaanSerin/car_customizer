import classes from './Configurator.module.scss'
import CarCustomizer from "../CarCustomizer/CarCustimozer";
import CarPreview from "../CarPreview/CarPreview";
import {useEffect, useState} from "react";
import CarCustomizerSkeleton from "../CarCustomizerSkeleton/CarCustomizerSkeleton";

const Configurator = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        // Simulating fetching data from a server
        setTimeout(() => {
            setData({
                models: [
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
                ],
                engines: [
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
                ],
                gearboxes: [
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
                ],
                colors: [
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
                ],
            })
            setIsLoading(false)
        }, 1500)
    })

    return (
        <div className={classes.Container}>
            <div className={classes.LayoutInner}>
                {!isLoading ?
                    <CarCustomizer data={data}/> :
                    <CarCustomizerSkeleton />}
                <CarPreview />
            </div>
        </div>
    )
}

export default Configurator
