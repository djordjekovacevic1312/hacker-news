import React, { Component } from 'react';
import classes from './NewsBuilder.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class NewsBuilder extends Component {

    componentDidMount() {
        this.props.onFetchNewsIds();
    }

    render() {
        return (
            <div className={classes.NewsBuilder}>

            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        newsIds: state.news.newsIds,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewsIds: () => dispatch(actions.fetchAllIds()),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NewsBuilder);