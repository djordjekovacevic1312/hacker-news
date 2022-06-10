import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import AutorenewIcon from '@mui/icons-material/Autorenew';


class Toolbar extends Component {
    render() {
        return (
            <div className={classes.Toolbar}>
            <div className={classes.ToolbarItems}>
                Hacker News
                <AutorenewIcon style={{cursor: 'pointer'}}/>
            </div>
        </div>
        );
    }
}


export default Toolbar;