import { FETCH_POSTS,NEW_POSTS,FETCH_MOCK_POSTS,WELCOME_MODAL_OPEN,HIDE_COOKIES } from '../actions/types';

const initialState = {
    items:[],
    item:{}, 
    welcomeModalOpen:true,
    cookiesHidden:false
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
        case WELCOME_MODAL_OPEN:
                    console.log('WELCOME_MODAL_OPEN - Reducer', state, ![action.payload.welcomeModalOpen])
                    return {
                    ...state,
                    welcomeModalOpen:![action.payload.welcomeModalOpen]
                    }
        case HIDE_COOKIES:
                console.log('HIDE_COOKIES - Reducer123', state, action.payload,'pay')
                    return {
                    ...state,
                    cookiesHidden:action.payload
                    }
        default:
            return state;
    }
}