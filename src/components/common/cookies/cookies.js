import React from 'react';
import './cookies.css';
import useAppearanceCookies from '../../../hooks/cookies/use-appearance-cookies';


const Cookies = () => {
    const {cookiesRef, acceptCookies} = useAppearanceCookies();
    return (
        <div className='cookies' ref={cookiesRef}>
            <div className='cookies__container _container'>
                <div className='cookies__body'>
                    <div className='cookies__text'>
                        We use cookie to improve your experience on our site. By using our site you consent cookies. 
                    </div>
                    <div className='cookies__btn'>
                        <button onClick={acceptCookies} href='#top'>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
