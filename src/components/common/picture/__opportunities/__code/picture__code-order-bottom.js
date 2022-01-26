import React from "react";
import CodeOrderBottom from './../../../../../assets/images/opportunities/__code/code-order-bottom.png';
import CodeOrderBottom2x from './../../../../../assets/images/opportunities/__code/code-order-bottom@2x.png';
import CodeOrderBottomMobile from './../../../../../assets/images/opportunities/__code/code-order-bottom-mobile.png';
import CodeOrderBottomMobile2x from './../../../../../assets/images/opportunities/__code/code-order-bottom-mobile@2x.png';
import CodeOrderBottomWebp from './../../../../../assets/images/opportunities/__code/code-order-bottom.webp';
import CodeOrderBottom2xWebp from './../../../../../assets/images/opportunities/__code/code-order-bottom@2x.webp';
import CodeOrderBottomMobileWebp from './../../../../../assets/images/opportunities/__code/code-order-bottom-mobile.webp';
import CodeOrderBottomMobile2xWebp from './../../../../../assets/images/opportunities/__code/code-order-bottom-mobile@2x.webp';

const PictureCodeOrderBottom = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${CodeOrderBottomMobileWebp}, ${CodeOrderBottomMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${CodeOrderBottomMobile}, ${CodeOrderBottomMobile2x} 2x`} />
                <source srcSet={`${CodeOrderBottomWebp}, ${CodeOrderBottom2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={CodeOrderBottom} 
                        srcSet={`${CodeOrderBottom2x} 2x`}
                        alt="Code Order Bottom"/>
            </picture>
        </div>
    );
};

export default PictureCodeOrderBottom;