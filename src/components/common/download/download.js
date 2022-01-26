import React from 'react';
import PictureDownloadAppStore from '../picture/__download/picture__download-app-store';
import PictureDownloadGooglePlay from '../picture/__download/picture__download-google-play';
import './download.css';

const Download = () => {
    return (
        <div className='main__download download'>
            <div className='download__container _container'>
                <div className='download__body'>
                    <div className='download__text'>
                    DOWNLOAD OUR APP
                    </div>
                    <div className='download__link'>
                        <div className='download__app-store'>
                        <a href='#top'>< PictureDownloadAppStore /></a>
                        </div>
                        <div className='download__google-play'>
                        <a href='#top'>< PictureDownloadGooglePlay /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;