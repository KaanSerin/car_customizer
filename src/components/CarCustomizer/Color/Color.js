import classes from './Color.module.scss'

const Color = ({color, method}) => {
    return (
        <div onClick={method} style={{backgroundColor: color}} className={classes.Color}/>
    )
}

export default Color
