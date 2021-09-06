// import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../store/actions/postActions';
import { useSelector,useDispatch } from 'react-redux';

const AddTweet = ({createPost}) => {

    const dispatch = useDispatch();
    const text = useSelector(state => state.posts.formData.text)
    const body = useSelector(state => state.posts.formData.body)
    const formData = useSelector(state => state.posts.formData)

    const addTweetOpen = useSelector(state => state.posts.hamburgerActive)

    const onChange = function(event){
        const value = event.target.value;
        const data = {[event.target.name]:value };
        dispatch({
            type: 'ADD_TWEET_FORM',
            payload: {...data}
        })
    }

    const onSubmit = function(event){
        event.preventDefault();

        const id = (() => Math.random() * (20000 - 200) + 200)().toString();
        console.log(id, 'iife - arrow')
        const addID = {id, ...formData};
        dispatch({
            type: 'CREATE_TWEET',
            payload: addID
        })
    }

    return (
        <div className='add-tweet-form'>
            <form onSubmit={onSubmit} className={addTweetOpen ? 'active' : 'not-active'}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="text" className="form-control" aria-describedby="title text" name='text' value={text} placeholder='Add title' onChange={onChange}/>
            </div>
            <div className="mb-3">
                <textarea id="formBody" className="form-control" placeholder="Whats happening?" name='body' value={body} onChange={onChange} />
            </div>
            <button type="submit" className="btn submit-tweet">Submit</button>
            </form>
        </div>
    );
}

AddTweet.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(AddTweet);
