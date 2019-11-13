import {
    SET_RECENT_POSTS
} from '../actions/types';
import { stat } from 'fs';

const INIT_STATE = {
    posts: [],
    recentPOsts: []
}

export default function(state = INIT_STATE, action) {
    switch(action.type) {
        case SET_RECENT_POSTS: 

            return [...state, {recentPosts: action.payload}]
        default: 
            return state;
    }
}