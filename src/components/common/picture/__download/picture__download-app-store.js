import React from 'react';
import DownloadAppStore from './../../../../assets/images/download/download-app-store.svg';
import DownloadAppStoreMobile from './../../../../assets/images/download/download-app-store-mobile.svg';

const PictureDownloadAppStore = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={DownloadAppStoreMobile} />
                <img className="image" 
                        src={DownloadAppStore}
                        alt="Download App Store"/>
            </picture>
        </div>
    );
};

export default PictureDownloadAppStore;