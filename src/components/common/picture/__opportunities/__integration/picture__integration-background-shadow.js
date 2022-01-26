import React from 'react';
import IntegrationBackgroundShadow from './../../../../../assets/images/opportunities/__integration/integration-background-shadow.svg';

const PictureIntegrationBackgroundShadow = () => {
    return (
        <div>
            <picture>
                <img className="image" 
                        src={IntegrationBackgroundShadow}
                        alt="Integration Background Shadow"/>
            </picture>
        </div>
    );
};

export default PictureIntegrationBackgroundShadow;