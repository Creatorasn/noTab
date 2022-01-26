import React from 'react';
import LinkPrivacy from '../common/links/__footer/link__privacy';
import LinkTerms from '../common/links/__footer/link__terms';
import PictureTitle from '../common/picture/__footer/picture__title';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container _container'>
                <div className='footer__body'>
                    <div className='footer__basic'>
                        <div className='footer__title'>
                            <PictureTitle />
                        </div>
                        <div className='footer__contact'>
                            Contact us: support@notab.com
                        </div>
                        <div className='footer__сopyright'>
                            © 2020 - NoTab®
                        </div>
                    </div>
                    <div className='footer__regulations'>
                        <div className='footer__terms'>
                            <LinkTerms />
                        </div>
                        <div className='footer__privacy'>
                            <LinkPrivacy />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__background'>
            </div>
        </footer>
    );
};

export default Footer;