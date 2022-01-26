import React from 'react';
import BlockNotabBackground from './../../../../assets/images/block-notab/block-notab-background.svg';

const PictureBlockNotabBackground = () => {
    return (
        <div>
            <picture>
                <img className="image" 
                        src={BlockNotabBackground}
                        alt="Block Notab Background" width="100%" />
            </picture>
        </div>
    );
};

export default PictureBlockNotabBackground;