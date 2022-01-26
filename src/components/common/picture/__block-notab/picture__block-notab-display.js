import React from "react";
import BlockNotabDisplay from './../../../../assets/images/block-notab/block-notab-display.png';
import BlockNotabDisplay2x from './../../../../assets/images/block-notab/block-notab-display@2x.png';
import BlockNotabDisplayWebp from './../../../../assets/images/block-notab/block-notab-display.webp';
import BlockNotabDisplay2xWebp from './../../../../assets/images/block-notab/block-notab-display@2x.webp';

const PictureBlockNotabDisplay = () => {
    return (
        <div>
            <picture>
                <source srcSet={`${BlockNotabDisplayWebp}, ${BlockNotabDisplay2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={BlockNotabDisplay} 
                        srcSet={`${BlockNotabDisplay2x} 2x`}
                        alt="Block Notab Display"/>
            </picture>
        </div>
    );
};

export default PictureBlockNotabDisplay;