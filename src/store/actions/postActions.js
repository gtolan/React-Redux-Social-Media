//1 Action

import { FETCH_POSTS,NEW_POSTS, FETCH_MOCK_POSTS } from './types';
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

