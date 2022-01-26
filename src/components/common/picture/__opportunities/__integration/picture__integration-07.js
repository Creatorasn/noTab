import React from 'react';
import Integration07 from './../../../../../assets/images/opportunities/__integration/integration-07.svg';
import Integration07Mobile from './../../../../../assets/images/opportunities/__integration/integration-07-mobile.svg';

const PictureIntegration07 = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={Integration07Mobile} />
                <img className="image" 
                        src={Integration07}
                        alt="Integration07"/>
            </picture>
        </div>
    );
};

export default PictureIntegration07;