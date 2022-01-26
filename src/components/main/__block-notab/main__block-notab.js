import React from 'react';
import PictureBlockNotabBackground from '../../common/picture/__block-notab/picture__block-notab-background';
import PictureBlockNotabIPhone from '../../common/picture/__block-notab/picture__block-notab-iPhone';
import PictureBlockNotabDisplay from '../../common/picture/__block-notab/picture__block-notab-display';
import './main__block-notab.css'

const BlockNotab = () => {
    return (
        <section className='main__notab-display notab-display'>
            <div className='block-notab-background'>
                <div className='block-notab-iPhohe'>
                    <div className='block-notab-display'>
                        <PictureBlockNotabDisplay />
                    </div>
                    < PictureBlockNotabIPhone />
                </div>
                < PictureBlockNotabBackground />
            </div>
                
                
            
        </section>
    );
};

export default BlockNotab;