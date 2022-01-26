import React from "react";
import ScannerBackground from './../../../../../assets/images/opportunities/__scanner/scanner-background.jpg';
import ScannerBackground2x from './../../../../../assets/images/opportunities/__scanner/scanner-background@2x.jpg';
import ScannerBackgroundMobile from './../../../../../assets/images/opportunities/__scanner/scanner-background-mobile.jpg';
import ScannerBackgroundMobile2x from './../../../../../assets/images/opportunities/__scanner/scanner-background-mobile@2x.jpg';
import ScannerBackgroundWebp from './../../../../../assets/images/opportunities/__scanner/scanner-background.webp';
import ScannerBackground2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-background@2x.webp';
import ScannerBackgroundMobileWebp from './../../../../../assets/images/opportunities/__scanner/scanner-background-mobile.webp';
import ScannerBackgroundMobile2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-background-mobile@2x.webp';

const PictureScannerBackground = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${ScannerBackgroundMobileWebp}, ${ScannerBackgroundMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${ScannerBackgroundMobile}, ${ScannerBackgroundMobile2x} 2x`} />
                <source srcSet={`${ScannerBackgroundWebp}, ${ScannerBackground2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={ScannerBackground} 
                        srcSet={`${ScannerBackground2x} 2x`}
                        alt="Scanner Background" width="100%"/>
            </picture>
        </div>
    );
};

export default PictureScannerBackground;