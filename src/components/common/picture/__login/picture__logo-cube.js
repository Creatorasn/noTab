import React from 'react';
import LogoCube from './../../../../assets/images/header/logo-cube.png';
import LogoCube2x from './../../../../assets/images/header/logo-cube@2x.png';
import LogoCubeMobile from './../../../../assets/images/header/logo-cube-mobile.png';
import LogoCubeMobile2x from './../../../../assets/images/header/logo-cube-mobile@2x.png';
import LogoCubeWebp from './../../../../assets/images/header/logo-cube.webp';
import LogoCube2xWebp from './../../../../assets/images/header/logo-cube@2x.webp';
import LogoCubeMobileWebp from './../../../../assets/images/header/logo-cube-mobile.webp';
import LogoCubeMobile2xWebp from './../../../../assets/images/header/logo-cube-mobile@2x.webp';

const PictureLogoCube = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${LogoCubeMobileWebp}, ${LogoCubeMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${LogoCubeMobile}, ${LogoCubeMobile2x} 2x`} />
                <source srcSet={`${LogoCubeWebp}, ${LogoCube2xWebp} 2x`} 
                        type="image/webp"
                        sizes='100vw' />
                <img className="image" 
                        src={LogoCube} 
                        srcSet={`${LogoCube2x} 2x`}
                        alt="Logo Cube"/>
            </picture>
        </div>
    );
};

export default PictureLogoCube;