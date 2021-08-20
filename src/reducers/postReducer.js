import { FETCH_POSTS,NEW_POSTS } from '../actions/types';

const initialState = {
    items:[],
    item:{}
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log('FETCH_POSTS - Reducer', state)
            return {
                ...state,
                items: action.payload
            }
        case NEW_POSTS:
                console.log('NEW_POSTS - Reducer', state)
                return {
                ...state,
                items: [action.payload,...state.items]
                // items: [...state.items, ]
                // ,
                // item: action.payload
                }
        default:
            return state;
    }
}