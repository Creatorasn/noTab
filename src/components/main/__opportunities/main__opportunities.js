import React from 'react';
import Cookies from '../../common/cookies/cookies';
import Code from './__code/main__code';
import Generate from './__generate/main__generate';
import Integration from './__integration/main__integration';
import Mission from './__mission/main__mission';
import Ordering from './__ordering/main__ordering';
import Scanner from './__scanner/main__scanner';

const Opportunities = () => {
    return (
        <section className='main__opportunities'>
            < Mission />
            <div className='main__display-mobile'>
                < Cookies />
            </div>
            < Scanner />
            < Integration />
            < Code />
            < Generate />
            < Ordering />
        </section>
    );
};

export default Opportunities;