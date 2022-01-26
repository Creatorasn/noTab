import React from 'react';
import Info from '../../common/info/info';
import Form from './form/form';
import PictureGetInTouchBackgroundTop from '../../common/picture/__get-in-touch/picture__get-in-touch-background-top';
import PictureGetInTouchBackgroundBottom from '../../common/picture/__get-in-touch/picture__get-in-touch-background-bottom';

import './main__get-in-touch.css';

const GetInTouch = () => {
    return (
        <section className='main__get-in-touch get-in-touch'>
            <div className='get-in-touch__background-top'>
                < PictureGetInTouchBackgroundTop />
            </div>
            <div className='get-in-touch__text'>
                < Info 
                title={"Get In Touch"} 
                description={"Have questions about Noble or just want to say hello? \n Drop us a line and a member of our team will getback to you shortly."} />
            </div>
            < Form />
            <div className='get-in-touch__background-bottom'>
                < PictureGetInTouchBackgroundBottom />
            </div>
        </section>
    );
};

export default GetInTouch;