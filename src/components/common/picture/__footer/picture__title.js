import React from 'react';
import FooterTitle from './../../../../assets/images/footer/title.svg';

const PictureTitle = () => {
    return (
        <div>
            <picture>
                <img className="image" 
                        src={FooterTitle}
                        alt="Title"/>
            </picture>
        </div>
    );
};

export default PictureTitle;