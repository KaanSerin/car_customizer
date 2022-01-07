import classes from './Option.module.scss'

const Option = ({name, method, disabled, selected}) => {
    const activeClasses = [classes.Option]
    if(selected) activeClasses.push(classes.selected)

    return (
        <button disabled={disabled} onClick={method} className={activeClasses.join(' ')}>{name}</button>
    )
}

export default Option;
