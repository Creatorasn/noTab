import React from 'react';
import Info from '../../../common/info/info';
import PictureOrderingBackground from '../../../common/picture/__opportunities/__ordering/picture__ordering-background';
import PictureOrderingIPhone from '../../../common/picture/__opportunities/__ordering/picture__ordering-iPhone';
import './main__ordering.css'
import OrderingExplanations from './ordering-explanations/ordering-explanations';

const Ordering = () => {
    return (
        <article className='main__ordering ordering'>
            <div className='ordering-background'>
                < PictureOrderingBackground />
            </div>
            <div className='ordering__container _container'>
                <div className='ordering__body'>
                    <div className='ordering__text'>
                        < Info
                        title={"Easier ordering. Happier guests."}
                        description={"NoTab makes it simple for patrons to easily"} />
                    </div>
                    <div className='ordering__explanations'>
                        <div className='ordering__explanation-01'>
                            < OrderingExplanations text='No more lost or forgotten credit cards' />
                        </div>
                        <div className='ordering__explanation-02'>
                            < OrderingExplanations text='No more lost or forgotten credit cards' />
                        </div>
                        <div className='ordering__explanation-03'>
                            < OrderingExplanations text='Skip the line' />
                        </div>
                        <div className='ordering__explanation-04'>
                            < OrderingExplanations text='No more split your tab' />
                        </div>
                    </div>
                    <div className='ordering__iPhone'>
                        < PictureOrderingIPhone />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Ordering;