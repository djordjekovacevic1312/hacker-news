import React from "react";
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => {
    

    return(
        <>
            <Backdrop show={props.show}/>
            <div 
                className={classes.Modal}
                style={{opacity: props.show ? '1' : '0'}}>
                    {props.children}
            </div>
        </>
    );
};

export default modal;