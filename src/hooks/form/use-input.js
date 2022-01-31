import { useEffect, useState } from 'react';
import useValidation from './use-validation';

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [decor, setDecor] = useState('')
    const {isEmpty, minLengthError, maxLengthError, emailError} = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect( () => {
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            setDecor('form_error')
        } else {
            setDecor('')
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError])

    return {
        value,
        decor,
        onChange
    }
}

export default useInput;