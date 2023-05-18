import classes from './Input.module.css';
import { PatternFormat } from 'react-number-format';

const Input = ({ format, type, label, inputIsError, value, inputChange, inputBlur, errorMessage, placeholder }) => {
    if (format) {
        return (
            <div className={classes['input-group']}>
                <label htmlFor="input">{label}</label>
                <PatternFormat
                    format={format}
                    type={type}
                    className={`${inputIsError ? 'border-danger' : ''}`}
                    value={value}
                    onChange={inputChange}
                    onBlur={inputBlur}
                    placeholder={placeholder}
                    valueIsNumericString={true}
                />
                {inputIsError && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        )
    } else {
        return (
            <div className={classes['input-group']}>
                <label htmlFor="input">{label}</label>
                <input
                    type={type}
                    className={`${inputIsError ? 'border-danger' : ''}`}
                    value={value}
                    onChange={inputChange}
                    onBlur={inputBlur}
                    placeholder={placeholder}
                />
                {inputIsError && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        )
    }
   
}

export default Input;