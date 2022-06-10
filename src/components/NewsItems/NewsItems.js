import React, { Component } from 'react';
import classes from './NewsItems.module.css';
import NewsItem from './NewsItem/NewsItem';
import { connect } from 'react-redux';

class NewsItems extends Component {

    render() {

        const newsItems = this.props.news.map(newsItem => (
            <NewsItem 
                key={newsItem.id}
                newsItem={newsItem}/>
        ))

        return (
            <>
                <ul className={classes.NewsItems}>
                    {newsItems}
                </ul>
            </>
        );
    }
}

const mapStatetoProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStatetoProps, null)(NewsItems);