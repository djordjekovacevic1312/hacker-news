import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Toolbar extends Component {
    render() {
        return (
            <div className={classes.Toolbar}>
            <div className={classes.ToolbarItems}>
                Hacker News
                <AutorenewIcon 
                    style={{cursor: 'pointer'}}
                    onClick={this.props.onFetchNewsIds}/>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewsIds: () => dispatch(actions.fetchAllIds())
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);