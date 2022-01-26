import React from "react";
import ScannerVerificationFinish from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish.png';
import ScannerVerificationFinish2x from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish@2x.png';
import ScannerVerificationFinishMobile from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish-mobile.png';
import ScannerVerificationFinishMobile2x from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish-mobile@2x.png';
import ScannerVerificationFinishWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish.webp';
import ScannerVerificationFinish2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish@2x.webp';
import ScannerVerificationFinishMobileWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish-mobile.webp';
import ScannerVerificationFinishMobile2xWebp from './../../../../../assets/images/opportunities/__scanner/scanner-verification-finish-mobile@2x.webp';

const PictureScannerVerificationFinish = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${ScannerVerificationFinishMobileWebp}, ${ScannerVerificationFinishMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${ScannerVerificationFinishMobile}, ${ScannerVerificationFinishMobile2x} 2x`} />
                <source srcSet={`${ScannerVerificationFinishWebp}, ${ScannerVerificationFinish2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={ScannerVerificationFinish} 
                        srcSet={`${ScannerVerificationFinish2x} 2x`}
                        alt="Scanner Verification Finish"/>
            </picture>
        </div>
    );
};

export default PictureScannerVerificationFinish;