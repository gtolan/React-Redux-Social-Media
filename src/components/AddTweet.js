// import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../store/actions/postActions';
import {useSelector,useDispatch} from 'react-redux';

const AddTweet = ({createPost}) => {

    const dispatch = useDispatch();
    const title = useSelector(state => state.posts.formData.title)
    const body = useSelector(state => state.posts.formData.body)
    const formData = useSelector(state => state.posts.formData)


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
        const generateID = () => {
            return Math.random() * (20000 - 200) + 200;
        }
        const id = generateID()
        const addID = {id, ...formData}
        dispatch({
            type: 'CREATE_TWEET',
            payload: addID
        })
    }

    return (
        <div>
            <h1>Add Post</h1>

            <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="text" className="form-control" aria-describedby="title text" name='title' value={title} placeholder='Add title' onChange={onChange}/>

            </div>
            <div className="mb-3">
                <textarea id="formBody" className="form-control" placeholder="Whats happening?" name='body' value={body} onChange={onChange} />
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onChange} />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn submit-tweet">Submit</button>
            </form>
        </div>
    );
}

AddTweet.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(AddTweet);
