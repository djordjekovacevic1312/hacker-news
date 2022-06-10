import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    newsIds: [],
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_IDS_SUCCESS:
            return updateObject(state, {loading: false, error: null, newsIds: action.newsIds})

        case actionTypes.FETCH_ALL_IDS_FAIL:
            return updateObject(state, {loading: false, error: action.error});
            
        case actionTypes.FETCH_ALL_IDS_START:
            return updateObject(state, {loading: true});

        default: return state;
    }
}

export default reducer;