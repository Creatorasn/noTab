import React from 'react';
import Download from '../../../common/download/download';
import Info from '../../../common/info/info';
import PictureCodeBackgroundLeft from '../../../common/picture/__opportunities/__code/picture__code-background-left';
import PictureCodeBackgroundNightlife from '../../../common/picture/__opportunities/__code/picture__code-background-nightlife';
import PictureCodeBackgroundRight from '../../../common/picture/__opportunities/__code/picture__code-background-right';
import PictureCodeOrderBottom from '../../../common/picture/__opportunities/__code/picture__code-order-bottom';
import PictureCodeOrderTop from '../../../common/picture/__opportunities/__code/picture__code-order-top';
import './main__code.css'

const Code = () => {
    return (
        <article className='main__code code'>
            <div className='code__background-left'>
                < PictureCodeBackgroundLeft />
            </div>
            <div className='code__container _container'>
                <div className='code__body'>
                    <div className='code__text'>
                        < Info
                        title={"QR code"}
                        description={"No more conflict situations due to wrong order. The guest selects the positions, and after that an individual QR code \n of his order is generated"} />
                    </div>
                </div>
                <div className='code__download'>
                    < Download />
                </div>
            </div>
            <div className='code__background-nightlife'>
                < PictureCodeBackgroundNightlife />
            </div>
            <div className='code__background-right'>
                < PictureCodeBackgroundRight />
            </div>
            <div className='code__order-img'>
                <div className='code__order-top'>
                    < PictureCodeOrderTop />
                </div>
                <div className='code__order-bottom'>
                    < PictureCodeOrderBottom />
                </div>
            </div>
        </article>
    );
};

export default Code;