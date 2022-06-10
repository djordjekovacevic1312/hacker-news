import * as actionTypes from './actionTypes';
import axiosLocal from '../../axiosLocal';

const fetchAllIdsSuccess = (newsIds) => {
    return {
        type: actionTypes.FETCH_ALL_IDS_SUCCESS,
        newsIds: newsIds
    }
}

const fetchAllIdsFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_IDS_FAIL,
        error: error
    }
}

const fetchAllIdsStart = () => {
    return {
        type: actionTypes.FETCH_ALL_IDS_START
    }
}

export const fetchAllIds = () => {
    return dispatch => {
        dispatch(fetchAllIdsStart())
        axiosLocal.get('/beststories.json?print=pretty')
            .then(response => {
                dispatch(fetchAllIdsSuccess(response.data));
                dispatch(fetchNews(response.data.slice(0, 20), 0))
            })
            .catch(error => {
                dispatch(fetchAllIdsFail(error));
            })
    }
}

const fetchNewsSuccess = (news) => {
    return {
        type: actionTypes.FETCH_NEWS_SUCCESS,
        news: news
    }
}

const fetchNewsFail = (error) => {
    return {
        type: actionTypes.FETCH_NEWS_FAIL,
        error: error
    }
}

const fetchNewsStart = () => {
    return {
        type: actionTypes.FETCH_NEWS_START
    }
}

export const fetchNews = (newsIds, startNumber) => {
    return dispatch => {
        dispatch(fetchNewsStart());
        const news = [];
        let count = 0;
        let number = startNumber;
        const get = () => {
            axiosLocal.get(`https://hacker-news.firebaseio.com/v0/item/${newsIds[count]}.json?print=pretty`)
                .then(response => {
                    news.push({
                        ...response.data,
                        number: number + 1
                    });
                    number++;
                    count++;
                    if(count === newsIds.length) {
                        dispatch(fetchNewsSuccess(news));
                    } else {
                        get();
                    }
                })
                .catch(error => {
                    dispatch(fetchNewsFail(error));
                })

        }

        get();
    }
}
