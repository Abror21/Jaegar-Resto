import classes from './Button.module.css';

const Button = ({ title }) => {
    return (
        <button className={`${classes.btn} btn`}>{title}</button>
    )
}

export default Button