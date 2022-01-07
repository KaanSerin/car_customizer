import classes from './Color.module.scss'

const Color = ({color, method, selected}) => {
    const activeClasses = [classes.Color]
    if(selected) activeClasses.push(classes.selected)

    return (
        <div onClick={method} style={{backgroundColor: color}} className={activeClasses.join(' ')}/>
    )
}

export default Color
