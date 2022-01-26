import React from "react";
import ScannerVerificationStart from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start.png';
import ScannerVerificationStart2x from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start@2x.png';
import ScannerVerificationStartMobile from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start-mobile.png';
import ScannerVerificationStartMobile2x from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start-mobile@2x.png';
import ScannerVerificationStartWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start.webp';
import ScannerVerificationStart2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start@2x.webp';
import ScannerVerificationStartMobileWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start-mobile.webp';
import ScannerVerificationStartMobile2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-start-mobile@2x.webp';

const PictureScannerVerificationStart = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${ScannerVerificationStartMobileWebp}, ${ScannerVerificationStartMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${ScannerVerificationStartMobile}, ${ScannerVerificationStartMobile2x} 2x`} />
                <source srcSet={`${ScannerVerificationStartWebp}, ${ScannerVerificationStart2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={ScannerVerificationStart} 
                        srcSet={`${ScannerVerificationStart2x} 2x`}
                        alt="Scanner Verification Start"/>
            </picture>
        </div>
    );
};

export default PictureScannerVerificationStart;