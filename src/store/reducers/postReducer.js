import { FETCH_POSTS,NEW_POSTS,FETCH_MOCK_POSTS } from '../actions/types';

const initialState = {
    items:[],
    item:{}
}

export default function reducerSwitch (state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
                console.log('FETCH_POSTS - Reducer', state)
                return {
                    ...state,
                    items: action.payload
                }
        case FETCH_MOCK_POSTS:
                console.log('FETCH_MOCK_POSTS - Reducer', state)
                return {
                    ...state,
                    items: action.payload.data
                }
        case NEW_POSTS:
                console.log('NEW_POSTS - Reducer', state)
                return {
                ...state,
                items: [action.payload,...state.items]

                }
        default:
            return state;
    }
}