import React from 'react';
import DownloadGooglePlay from './../../../../assets/images/download/download-google-play.svg';
import DownloadGooglePlayMobile from './../../../../assets/images/download/download-google-play-mobile.svg';

const PictureDownloadGooglePlay = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={DownloadGooglePlayMobile} />
                <img className="image" 
                        src={DownloadGooglePlay}
                        alt="Download App Store"/>
            </picture>
        </div>
    );
};

export default PictureDownloadGooglePlay;