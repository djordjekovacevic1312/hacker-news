import React from "react";
import classes from './Spinner.module.css';

const spinner = () => {
    //console.log('Spinner');
    return(
        <div className={classes.Spinner}>
            <div className={classes.loader}>Loading...</div>
        </div>
    );
}
export default spinner;
