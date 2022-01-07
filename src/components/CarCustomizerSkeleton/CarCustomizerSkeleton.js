import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CarCustomizerSkeleton = () => {
    return (
        <div>
            <div style={{width: '100px'} }>
                <Skeleton height='1.5rem' />
            </div>

            <div style={{width: '80px',  margin: '0.5rem 0'} }>
                <Skeleton height='1rem' />
            </div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{width: '80px',  margin: '0.5rem 0'} }>
                <Skeleton height='1rem' />
            </div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{width: '80px',  margin: '0.5rem 0'} }>
                <Skeleton height='1rem' />
            </div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{width: '80px',  margin: '0.5rem 0'} }>
                <Skeleton height='1rem' />
            </div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2.5rem' style={{width: '40px', marginRight: '1rem'}}/>
                <Skeleton height='2.5rem' style={{width: '40px', marginRight: '1rem'}}/>
                <Skeleton height='2.5rem' style={{width: '40px', marginRight: '1rem'}}/>
                <Skeleton height='2.5rem' style={{width: '40px', marginRight: '1rem'}}/>
            </div>
        </div>
    )
}

export default CarCustomizerSkeleton
