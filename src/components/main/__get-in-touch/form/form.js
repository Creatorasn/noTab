import React from 'react';
import './form.css'
import useInput from '../../../../hooks/use-input';
import usePressing from '../../../../hooks/use-pressing';

const Form = () => {
    const name = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70})
    const vanueName = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70})
    const vanueCity = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70})
    const stateCity = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70})
    const email = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70, isEmail: true,})
    const subject = useInput ('', {isEmpty: true, minLength: 3, maxLength: 70})
    const message = useInput ('', {isEmpty: true, minLength: 3, maxLength: 500})
    const {isPressing, onPressing} = usePressing ('')

    return (
        <form className='get-in-touch__form form' >
            <div className={isPressing && name.decor}>
                <input  {...name} placeholder='Name' />
            </div>
            <div className={isPressing && vanueName.decor}>
                <input  {...vanueName} placeholder='Vanue Name' />
            </div>
            <div className='form__city'>
                <div className={isPressing && vanueCity.decor}>
                    <input  {...vanueCity} placeholder='Vanue City' />
                </div>
                <div className={isPressing && stateCity.decor}>
                    <input  {...stateCity} placeholder='State City' />
                </div>
            </div>
            <div className={isPressing && email.decor}>
                <input  {...email} placeholder='Email' />
            </div>
            <div className={isPressing && subject.decor}>
                <input  {...subject} placeholder='Subject' />
            </div>
            <div className='form__message'>
                <div className={isPressing && message.decor}>
                    <textarea  {...message} placeholder='Message' />
                </div>
            </div>
            <div className={isPressing ? 'form_btn-pressing' : 'form_btn'}>
                <button onClick={onPressing} type='submit'>Send</button>
            </div>
        </form>
    );
};

export default Form;