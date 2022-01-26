import React from "react";
import CodeBackgroundRight from './../../../../../assets/images/opportunities/__code/code-background-right.jpg';
import CodeBackgroundRight2x from './../../../../../assets/images/opportunities/__code/code-background-right@2x.jpg';
import CodeBackgroundRightMobile from './../../../../../assets/images/opportunities/__code/code-background-right-mobile.png';
import CodeBackgroundRightMobile2x from './../../../../../assets/images/opportunities/__code/code-background-right-mobile@2x.png';
import CodeBackgroundRightWebp from './../../../../../assets/images/opportunities/__code/code-background-right.webp';
import CodeBackgroundRight2xWebp from './../../../../../assets/images/opportunities/__code/code-background-right@2x.webp';
import CodeBackgroundRightMobileWebp from './../../../../../assets/images/opportunities/__code/code-background-right-mobile.webp';
import CodeBackgroundRightMobile2xWebp from './../../../../../assets/images/opportunities/__code/code-background-right-mobile@2x.webp';

const PictureCodeBackgroundRight = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${CodeBackgroundRightMobileWebp}, ${CodeBackgroundRightMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${CodeBackgroundRightMobile}, ${CodeBackgroundRightMobile2x} 2x`} />
                <source srcSet={`${CodeBackgroundRightWebp}, ${CodeBackgroundRight2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={CodeBackgroundRight} 
                        srcSet={`${CodeBackgroundRight2x} 2x`}
                        alt="Code Background Right"/>
            </picture>
        </div>
    );
};

export default PictureCodeBackgroundRight;