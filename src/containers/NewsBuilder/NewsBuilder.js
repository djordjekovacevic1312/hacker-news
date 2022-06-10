import React, { Component } from 'react';
import classes from './NewsBuilder.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import NewsItems from '../../components/NewsItems/NewsItems';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

class NewsBuilder extends Component {

    componentDidMount() {
        this.props.onFetchNewsIds();
    }

    render() {
        return (
            <div className={classes.NewsBuilder}>
                {this.props.error ? 
                    <Modal show={this.props.error}>
                        {this.props.error.message}
                    </Modal> : null}
                {this.props.loading ? <Spinner/> : null}
                {this.props.news.length > 0 ? <NewsItems/> : null}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        newsIds: state.news.newsIds,
        news: state.news.news,
        loading: state.news.loading,
        error: state.news.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewsIds: () => dispatch(actions.fetchAllIds()),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NewsBuilder);