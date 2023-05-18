
import Button from '../../../../../components/button';
import Input from '../../../../../components/input/Input';
import { useInput } from '../../../../../hooks/use-input';
import classes from './PaymentForm.module.css';

const PaymentForm = () => {

    const {
        inputChange: nameInputChange,
        inputBlur: nameInputBlur,
        inputTouch: nameInputTouch,
        value: name,
        inputIsValid: nameIsValid,
        inputIsError: nameInputIsError
    } = useInput(name => name.trim().length > 0);
    const {
        inputChange: numberInputChange,
        inputBlur: numberInputBlur,
        inputTouch: numberInputTouch,
        value: number,
        inputIsValid: numberIsValid,
        inputIsError: numberInputIsError
    } = useInput(number => number.trim().length > 18);
    const {
        inputChange: dateInputChange,
        inputBlur: dateInputBlur,
        inputTouch: dateInputTouch,
        value: date,
        inputIsValid: dateIsValid,
        inputIsError: dateInputIsError
    } = useInput(date => date.trim().length > 6);
    const {
        inputChange: cvvInputChange,
        inputBlur: cvvInputBlur,
        inputTouch: cvvInputTouch,
        value: cvv,
        inputIsValid: cvvIsValid,
        inputIsError: cvvInputIsError
    } = useInput(cvv => cvv.trim().length > 2);


    const handleSubmit = e => {
        e.preventDefault();
        console.log('sumib asd fasdf');
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                <Input
                    type="text"
                    label="Cardholder Name"
                    inputIsError={nameInputIsError}
                    value={name}
                    inputChange={e => nameInputChange(e)}
                    inputBlur={nameInputBlur}
                    errorMessage="Please enter cardholder name."
                    placeholder='Cardholder Name'
                />
                <Input
                    format="#### #### #### ####"
                    label="Card Number"
                    inputIsError={numberInputIsError}
                    value={number}
                    inputChange={e => numberInputChange(e)}
                    inputBlur={numberInputBlur}
                    errorMessage="Please enter valid card number."
                    placeholder='Card number'
                />
                <div className={classes['div-group']}>
                    <Input
                        format="##/####"
                        label="Expiration Date"
                        inputIsError={dateInputIsError}
                        value={date}
                        inputChange={e => dateInputChange(e)}
                        inputBlur={dateInputBlur}
                        errorMessage="Value should be at least 6 characters"
                        placeholder='Expiration date'
                    />
                    <Input
                        format="###"
                        label="CVV"
                        inputIsError={cvvInputIsError}
                        value={cvv}
                        inputChange={e => cvvInputChange(e)}
                        inputBlur={cvvInputBlur}
                        errorMessage="Value should be at least 3 characters"
                        placeholder='CVV'
                    />
                </div>
                <div className={classes.type}>
                    <div className={classes['select']}>
                        <label>Order Type</label>
                        <select>
                            <option value="">Dine In</option>
                            <option value="">Go Out</option>
                            <option value="">Delivery</option>
                        </select>
                    </div>
                    <div className={classes['table-num']}>
                        <label>Table n.</label>
                        <input type="text" value={140} readOnly />
                    </div>
                </div>
            </div>
            <div className={classes.btns}>
                <button className={`${classes.cancel} btn`}>Cancel</button>
                <Button title='Confirm Payment' type='submit' />
            </div>
        </form>
    )
}

export default PaymentForm