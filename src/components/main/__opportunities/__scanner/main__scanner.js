import React from 'react';
import Info from '../../../common/info/info';
import PictureScannerBackground from '../../../common/picture/__opportunities/__scanner/picture__scanner-background';
import PictureScannerVerificationFinish from '../../../common/picture/__opportunities/__scanner/picture__scanner-verification-finish';
import PictureScannerVerificationStart from '../../../common/picture/__opportunities/__scanner/picture__scanner-verification-start';
import './main__scanner.css'

const Scanner = () => {
    return (
        <article className='main__scanner scanner'>
            <div className='scanner__background'>
                < PictureScannerBackground />
            </div>
            <div className='scanner__container _container'>
                <div className='scanner__body'>
                    <div className='scanner__text'>
                        < Info
                        title={"ID Scanner"}
                        description={"Scan, verify, and collect data on each person that walks through your door to humanize your data. You also get a digital 86 list as well as a citywide ban list to keep your venue safe."} />
                    </div>
                    <div className='scanner__verification-start'>
                < PictureScannerVerificationStart />
            </div>
            <div className='scanner__verification-finish'>
                < PictureScannerVerificationFinish />
            </div>
                </div>
            </div>
            
        </article>
    );
};

export default Scanner;