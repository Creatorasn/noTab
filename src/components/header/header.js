import React from 'react';
import LinkLogin from '../common/links/__login/link__login';
import PictureLogoCube from '../common/picture/__login/picture__logo-cube';
import PictureLogoNotab from '../common/picture/__login/picture__logo-notab';
import LoginIcon from './../../assets/images/header/login-icon.svg';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container _container'>
                <div className='header__logo'>
                    <div className='header__logo-cube'>
                        < PictureLogoCube />
                    </div>
                    <div className='header__logo-notab'>
                        < PictureLogoNotab />
                    </div>
                </div>
                <div className='header__login'>
                    <div className='header__login-icon'>
                        <img src={LoginIcon} alt="Icon Login" width="26" height="25"></img>
                    </div>
                    <div className='header__login-link'>
                        < LinkLogin />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;