import React from 'react';
import Info from '../../../common/info/info';
import PictureGenerateArrow from '../../../common/picture/__opportunities/__generate/picture__generate-arrow';
import PictureGenerateBackground from '../../../common/picture/__opportunities/__generate/picture__generate-background';
import PictureGenerateIPhone from '../../../common/picture/__opportunities/__generate/picture__generate-iPhone';
import './main__generate.css'

const Generate = () => {
    return (
        <article className='main__generate generate'>
            <div className='generate__background'>
                < PictureGenerateBackground />
            </div>
            <div className='generate__container _container'>
                <div className='generate__body'>
                    <div className='generate__text'>
                        < Info
                        title={"Generate your QR-code"}
                        description={"The guest QR code is scanned \n by the staff and automatically sent"} />
                    </div>
                    <div className='generate__iPhone-background'></div>
                    <div className='generate__iPhone'>
                        < PictureGenerateIPhone />
                    </div>
                    <div className='generate__arrow'>
                        < PictureGenerateArrow />
                    </div>
                    <div className='generate__recommendation'>
                        <p>Scan QR-code</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Generate;