import React from 'react';
import './partner-column.css';

const PartnerColumn = ({text, link}) => {
    return (
        <div className='partner__column'>
            <div className='partner__item item-partner'>
                <div className='item-partner__text'>{text}</div>
                <a href='#top' className='item-partner__link'>{link}</a>
            </div>
        </div>
    );
};

export default PartnerColumn;