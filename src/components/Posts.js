import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

const Posts = (props) => {
    
    useEffect(() => {
       props.fetchPosts()  
       console.log(props);
    }, [fetchPosts])

    // useEffect(() => {
    //     props.updateState()
    // },[props.newPost])

    const postItems =
    props.posts && props.posts.length > 0 ? (props.posts.map(post => (
        <p key={post.id}>{post.title}</p>
    ))) : ('No posts');

    return (
        <div>
            <h1>Posts</h1>
            { postItems }
        </div>
    );
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts : state.posts.items, //from reduce combine naming,
    newPost : state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
