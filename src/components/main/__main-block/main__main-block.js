import React from 'react';
import PictureBackgroundLeft from '../../common/picture/__main-block/picture__background-left';
import PictureBackgroundRight from '../../common/picture/__main-block/picture__background-right';
import PictureIphoneX from '../../common/picture/__main-block/picture__iphone-x';
import './main__main-block.css';

const MainBlock = () => {
    return (
        <section className='main__main-block main-block'>
            <div className='main-block__container _container'>
                <div className='main-block__body'>
                    <div className='main-block__column-body'>
                        <div className='main-block__title'>
                            <h1>A platform <br />that works smarter</h1>
                        </div>
                        <div className='main-block__description'>
                            <div className='main-block__line'></div>
                            <div className='main-block__text'>
                                NoTab allows bars & nightclubs <br />to manage, understand, and grow their business from a single dashboard
                            </div>
                        </div>
                    </div>
                    <div className='main-block__column-img'>
                        < PictureIphoneX />
                    </div>
                </div>
                <div className='main-block__background-left'>
                    < PictureBackgroundLeft />
                </div>
                <div className='main-block__background-right'>
                    < PictureBackgroundRight />
                </div>
            </div>
        </section>
    );
};

export default MainBlock;