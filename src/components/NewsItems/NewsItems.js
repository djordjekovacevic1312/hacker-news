import React, { Component } from 'react';
import classes from './NewsItems.module.css';
import NewsItem from './NewsItem/NewsItem';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Button, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
        primary: {
            main: '#2e8b09'
        }
    }
});

class NewsItems extends Component {

    nextButtonHandler = () => {
        this.props.onFetchNews(
            this.props.newsIds.slice(this.props.page * 20, (this.props.page + 1) * 20),
            this.props.page * 20, 
            this.props.page + 1
        );
    }

    prevButtonHandler = () => {
        this.props.onFetchNews(
            this.props.newsIds.slice((this.props.page - 2) * 20, (this.props.page - 1) * 20),
            (this.props.page - 2) * 20, 
            this.props.page - 1
        );
    }

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
                <ThemeProvider theme={theme}>
                    <Button
                        onClick={this.prevButtonHandler}
                        disabled={this.props.page === 1 ? true : false}
                        style={{margin: '16px'}} 
                        variant='contained'>PREV</Button>
                    <Button 
                        onClick={this.nextButtonHandler}
                        disabled={(this.props.newsIds.length / this.props.page) > 20 ? false : true}
                        style={{margin: '16px'}}
                        variant='contained'>NEXT</Button>
                </ThemeProvider>
            </>
        );
    }
}

const mapStatetoProps = state => {
    return {
        newsIds: state.news.newsIds,
        news: state.news.news,
        page: state.news.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNews: (newsIds, startNumber, page) => dispatch(actions.fetchNews(newsIds, startNumber, page))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NewsItems);