import { FETCH_POSTS,NEW_POSTS,FETCH_MOCK_POSTS,WELCOME_MODAL_OPEN,HIDE_COOKIES,TOGGLE_HAMBURGER, ADD_TWEET_FORM, CREATE_TWEET} from '../actions/types';

const initialState = {
    items:[],
    item:{}, 
    welcomeModalOpen:true,
    cookiesHidden:false,
    hamburgerActive:false,
    formData:{title:'', body:''},
    profile:false
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
                console.log('FETCH_MOCK_POSTS - Reducer', state, action.payload.data);
                const profile = action.payload.data[0];
                const items = action.payload.data.splice(1);
                return {
                    ...state,
                    items: [...state.items,...items],
                    profile
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
        case TOGGLE_HAMBURGER :
                console.log('THR', action.payload)
                return {
                    ...state,
                    hamburgerActive: !action.payload
                }
        case ADD_TWEET_FORM :
                console.log('FORM DATA',  state.formData, action.payload);
                return {
                    ...state,
                    formData: {...state.formData, ...action.payload}
                }
        case CREATE_TWEET:
                console.log('Create payload', action.payload, ...state.items);
                const tweet = {...state.profile,...action.payload}
                return {
                    ...state,
                     items: [tweet,...state.items]
                }
        
        default:
            return state;
    }
}