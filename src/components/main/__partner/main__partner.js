import React from 'react';
import './main__partner.css';
import PartnerColumn from './partner-column/partner-column';

const Partner = () => {
    return (
        <section className='main__partner partner'>
            <div className='partner__container _container'>
                <div className='partner__body'>
                    < PartnerColumn 
                    text={"Would like to become a member, please contact us"}
                    link={"support@notab.com"} />
                    < PartnerColumn 
                    text={"Already a partner? "}
                    link={"Login"} />
                </div>
            </div>
        </section>
    );
};

export default Partner;