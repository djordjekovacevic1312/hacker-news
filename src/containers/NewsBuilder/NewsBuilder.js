import React, { Component } from 'react';
import classes from './NewsBuilder.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import NewsItems from '../../components/NewsItems/NewsItems';

class NewsBuilder extends Component {

    componentDidMount() {
        this.props.onFetchNewsIds();
    }

    render() {
        return (
            <div className={classes.NewsBuilder}>
                {this.props.news.length > 0 ? <NewsItems/> : null}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        newsIds: state.news.newsIds,
        news: state.news.news,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewsIds: () => dispatch(actions.fetchAllIds()),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NewsBuilder);