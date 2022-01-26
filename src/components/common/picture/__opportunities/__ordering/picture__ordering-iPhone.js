import React from "react";
import OrderingIPhone from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone.png';
import OrderingIPhone2x from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone@2x.png';
import OrderingIPhoneMobile from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone-mobile.png';
import OrderingIPhoneMobile2x from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone-mobile@2x.png';
import OrderingIPhoneWebp from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone.webp';
import OrderingIPhone2xWebp from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone@2x.webp';
import OrderingIPhoneMobileWebp from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone-mobile.webp';
import OrderingIPhoneMobile2xWebp from './../../../../../assets/images/opportunities/__ordering/ordering-iPhone-mobile@2x.webp';

const PictureOrderingIPhone = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${OrderingIPhoneMobileWebp}, ${OrderingIPhoneMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${OrderingIPhoneMobile}, ${OrderingIPhoneMobile2x} 2x`} />
                <source srcSet={`${OrderingIPhoneWebp}, ${OrderingIPhone2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={OrderingIPhone} 
                        srcSet={`${OrderingIPhone2x} 2x`}
                        alt="Ordering IPhone"/>
            </picture>
        </div>
    );
};

export default PictureOrderingIPhone;