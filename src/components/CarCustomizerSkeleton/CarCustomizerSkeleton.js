import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CarCustomizerSkeleton = () => {
    return (
        <div>
            <div style={{textAlign:'start', fontWeight: 'bold', marginBottom: '0.5rem'}}>CKONFIG 5.1</div>

            <div style={{textAlign:'start', marginBottom: '0.25rem'}}>Models</div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{textAlign:'start', marginBottom: '0.25rem'}}>Engines</div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{textAlign:'start', marginBottom: '0.25rem'}}>Gearbox</div>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
                <Skeleton height='2rem' style={{width: '100px', marginRight: '1rem'}}/>
            </div>

            <div style={{textAlign:'start', marginBottom: '0.25rem'}}>Colors</div>
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
