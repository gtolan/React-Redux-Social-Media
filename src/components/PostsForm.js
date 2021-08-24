import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../store/actions/postActions'

const PostsForm = ({createPost}) => {
    const [inputValue, setValue] = useState({title:'',body:''});
    
    const onChange = function(event){
        setValue({...inputValue,
                [event.target.name]:event.target.value})
    }

    const onSubmit = async function(event){
        event.preventDefault();
        console.log(inputValue, 'IV')
        const postData = inputValue;
        createPost(postData)
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit} data-testid='add-task-form'>
                <div>
                    <label htmlFor='title'>Title</label><br/>
                    <input name='title' type='text' value={inputValue.title} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor='body'>Body</label><br/>
                    <textarea name='body' type='text' value={inputValue.body} onChange={onChange} style={{resize:'none'}}/>
                </div>
                <div>
                   <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

PostsForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(PostsForm);
