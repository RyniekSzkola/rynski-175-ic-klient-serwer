import React from 'react';
import classes from './Footer.module.css';
import IpLocation from '../../containers/IpLocation/IpLocation';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <span style={{fontWeight: 700, fontSize: '18px'}}>© Michał Ryński 2021</span>
            <IpLocation />
        </div>
    );
};

export default footer;