import React from "react";
import classes from './NewsItem.module.css';

const newsItem = (props) => {

    const timeAgo = (time) => {
        if(time > 1) {
            return Math.floor(time) + ' days ago';
        }
        if(time < 1) {
            return Math.floor(time * 24) + ' hours ago';
        }
    }

    return(
        <li className={classes.NewsItem}>
            <p>
            {props.newsItem.number}. {props.newsItem.type}: {props.newsItem.title}
            </p>
            <p className={classes.Transparent}>
                {props.newsItem.url}
            </p>
            <p>
                <span>{props.newsItem.score} points </span>
                <span className={classes.Transparent}>by </span>
                <span>{props.newsItem.by} </span>
                <span className={classes.Transparent}>
                    {timeAgo((new Date().getTime() - (props.newsItem.time * 1000)) / 1000 / 60 / 60 / 24)}
                </span>
            </p>
        </li>
    )
}

export default newsItem;