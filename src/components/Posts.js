import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

const Posts = (props) => {
    
    useEffect(() => {
       props.fetchPosts()  
       //console.log(props);
    }, []) //

    // useEffect(() => {
    //     props.updateState()
    // },[props.newPost])
/* // post.title */
    const postItems =
    props.posts && props.posts.length > 0 ? (props.posts.map(post => (
        <p className="list-item" data-testid={`list-item-${post.id}`} key={post.id}>{post.id}</p>
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
