import React from 'react';
import Info from '../../../common/info/info';
import PictureIntegration01 from '../../../common/picture/__opportunities/__integration/picture__integration-01';
import PictureIntegration02 from '../../../common/picture/__opportunities/__integration/picture__integration-02';
import PictureIntegration03 from '../../../common/picture/__opportunities/__integration/picture__integration-03';
import PictureIntegration04 from '../../../common/picture/__opportunities/__integration/picture__integration-04';
import PictureIntegration05 from '../../../common/picture/__opportunities/__integration/picture__integration-05';
import PictureIntegration06 from '../../../common/picture/__opportunities/__integration/picture__integration-06';
import PictureIntegration07 from '../../../common/picture/__opportunities/__integration/picture__integration-07';
import PictureIntegrationBackgroundShadow from '../../../common/picture/__opportunities/__integration/picture__integration-background-shadow';
import './main__integration.css'

const Integration = () => {
    return (
        <article className='main__integration integration'>
            <div className='integration__background-shadow'>
                < PictureIntegrationBackgroundShadow />
            </div>
            <div className='integration__container _container'>
                <div className='integration__body'>
                    <div className='integration__text'>
                        < Info
                        title={"BI Tool Integration"}
                        description={"We use Business Intelligence Tool that allows you to be updated what is happening in your business just by one click. Track revenue \n and profit by one click."} />
                    </div>
                </div>
            <div className='integration-01'>
                < PictureIntegration01 />
            </div>
            <div className='integration-02'>
                < PictureIntegration02 />
            </div>
            <div className='integration-03'>
                < PictureIntegration03 />
            </div>
            <div className='integration-04'>
                < PictureIntegration04 />
            </div>
            <div className='integration-05'>
                < PictureIntegration05 />
            </div>
            <div className='integration-06'>
                < PictureIntegration06 />
            </div>
            <div className='integration-07'>
                < PictureIntegration07 />
            </div>
            </div>
        </article>
    );
};

export default Integration;