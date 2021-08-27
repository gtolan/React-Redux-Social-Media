//1 Action

import { FETCH_POSTS,NEW_POSTS, FETCH_MOCK_POSTS, WELCOME_MODAL_OPEN, HIDE_COOKIES, TOGGLE_HAMBURGER, ADD_TWEET_FORM, CREATE_TWEET } from './types';
import postListApi from '../../mock/posts-list-api'


export const fetchPosts = () => async(dispatch) => { 
        // console.log('FETCH_POSTS - Action')
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
}

//Mock posts - Do not over-use api calls in dev
export const fetchMockPosts = () => async(dispatch) => { 
        console.log('FETCH_MOCK_POSTS - Action')
        // const data =  await fetch('https://dummyapi.io/data/v1/post', {
        //     method: 'GET',
        //     headers: {
        //         'app-id': '61250ce38366fefbfd64ba94',
        //     }
        // });
        // const res = await data.json()
        // console.log(res)

        const res = postListApi;
        console.log(res)

        dispatch({
            type: FETCH_MOCK_POSTS,
            payload: res
        })
}

export const createPost = (postData) => async(dispatch) => { 
    //console.log('NEW_POSTS - Action')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method:'POST',
                        headers:{'Content-type':'application/json'},
                        body: JSON.stringify(postData)});
    const data = await res.json();

    const randomID = function (min, max) {
        return Math.random() * (max - min) + min;
    }
    const id = randomID(101, 3000);

    dispatch({
        type: NEW_POSTS,
        payload: {...data, id}
    })
}

export const closeWelcomeModal = (currentBool) => async(dispatch) => { 
    console.log('closeWelcomeModal')
    currentBool = !currentBool
    dispatch({
        type: WELCOME_MODAL_OPEN,
        payload: currentBool
    })
}

//cookiesHidden

export const closeCookiesBanner = (currentBool) => async(dispatch) => { 
    console.log('close cookies banner')
    currentBool = !currentBool;
    console.log('THR')
    dispatch({
        type: HIDE_COOKIES,
        payload: currentBool
    })
}

//toggle hamburger menu - posts page

export const toggleHamburger = (currentBool) =>(dispatch) =>{

    console.log('toggle hamburger menu')
    currentBool = !currentBool
    dispatch({
        type: TOGGLE_HAMBURGER,
        payload: currentBool
    })

}

//post tweet 
export const addTweet = (formData) => (dispatch) => {
    dispatch({
        type:ADD_TWEET_FORM ,
        payload:formData
    })
}

//create tweet
export const createTweet = (formData) => (dispatch) => {
    dispatch({
        type:CREATE_TWEET,
        payload:formData
    })

};

