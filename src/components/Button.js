import classes from './Button.module.css';

const Button = ({ title, handleClick }) => {
    return (
        <button className={`${classes.btn} btn`} onClick={handleClick}>{title}</button>
    )
}

export default Button