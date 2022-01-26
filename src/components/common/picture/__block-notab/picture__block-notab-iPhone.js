import React from "react";
import BlockNotabIPhone from './../../../../assets/images/block-notab/block-notab-iPhone.png';
import BlockNotabIPhone2x from './../../../../assets/images/block-notab/block-notab-iPhone@2x.png';
import BlockNotabIPhoneWebp from './../../../../assets/images/block-notab/block-notab-iPhone.webp';
import BlockNotabIPhone2xWebp from './../../../../assets/images/block-notab/block-notab-iPhone@2x.webp';

const PictureBlockNotabIPhone = () => {
    return (
        <div>
            <picture>
                <source srcSet={`${BlockNotabIPhoneWebp}, ${BlockNotabIPhone2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={BlockNotabIPhone} 
                        srcSet={`${BlockNotabIPhone2x} 2x`}
                        alt="Block Notab IPhone"/>
            </picture>
        </div>
    );
};

export default PictureBlockNotabIPhone;