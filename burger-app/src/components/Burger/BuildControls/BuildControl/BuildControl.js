import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Mniej</button>
            <button className={classes.More} onClick={props.added}>Więcej</button>
        </div>
    );
};

buildControl.propTypes = {
    label: PropTypes.string
};

export default buildControl;