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
            })
            .catch(error => {
                dispatch(fetchAllIdsFail(error));
            })
    }
}