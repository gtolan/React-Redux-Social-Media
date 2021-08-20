//1 Action

import { FETCH_POSTS,NEW_POSTS } from './types';


export const fetchPosts = () => async(dispatch) => { 
        console.log('FETCH_POSTS - Action')
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
}

export const createPost = (postData) => async(dispatch) => { 
    console.log('NEW_POSTS - Action')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {method:'POST',
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

