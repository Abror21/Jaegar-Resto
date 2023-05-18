import { useReducer } from "react";

const initialState = { value: '', touched: false,};

const reducer = (state, action) => {
    if (action.type === 'VALUE') {
        return { ...state, value: action.value };
    } else if (action.type === 'BLUR') {
        return { ...state, touched: true }
    }
    return state;
}

export const useInput = (inputValidation = () => { }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const inputChange = (e) => {
        console.log(e.target.value.trim().length);
        dispatch({ type: "VALUE", value: e.target.value });
    }
    const inputBlur = e => {
        dispatch({ type: "BLUR" });
    }
    const inputTouch = () => {
        dispatch({ type: "BLUR" })
    }

    let inputIsValid = inputValidation(state.value);
    let inputIsError = state.touched && !inputIsValid;

    return {
        inputChange,
        inputBlur,
        inputTouch,
        value: state.value,
        inputIsValid,
        inputIsError,
    }
}