import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Toolbar/>
            {props.children}  
        </div>
    );
}

export default layout;