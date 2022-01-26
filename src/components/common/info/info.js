import React from 'react';
import './info.css';

const Info = ({title,description}) => {
    return (
        <div className='info'>
            <h2>{title}</h2>
            <div className='info__description'>{description}</div>
        </div>
    );
};

export default Info;