import React from "react";
import CodeOrderTop from './../../../../../assets/images/opportunities/__code/code-order-top.png';
import CodeOrderTop2x from './../../../../../assets/images/opportunities/__code/code-order-top@2x.png';
import CodeOrderTopMobile from './../../../../../assets/images/opportunities/__code/code-order-top-mobile.png';
import CodeOrderTopMobile2x from './../../../../../assets/images/opportunities/__code/code-order-top-mobile@2x.png';
import CodeOrderTopWebp from './../../../../../assets/images/opportunities/__code/code-order-top.webp';
import CodeOrderTop2xWebp from './../../../../../assets/images/opportunities/__code/code-order-top@2x.webp';
import CodeOrderTopMobileWebp from './../../../../../assets/images/opportunities/__code/code-order-top-mobile.webp';
import CodeOrderTopMobile2xWebp from './../../../../../assets/images/opportunities/__code/code-order-top-mobile@2x.webp';

const PictureCodeOrderTop = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${CodeOrderTopMobileWebp}, ${CodeOrderTopMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${CodeOrderTopMobile}, ${CodeOrderTopMobile2x} 2x`} />
                <source srcSet={`${CodeOrderTopWebp}, ${CodeOrderTop2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={CodeOrderTop} 
                        srcSet={`${CodeOrderTop2x} 2x`}
                        alt="Code Order Top"/>
            </picture>
        </div>
    );
};

export default PictureCodeOrderTop;