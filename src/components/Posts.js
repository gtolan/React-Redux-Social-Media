import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchMockPosts } from '../store/actions/postActions';
import PropTypes from 'prop-types';


const Posts = (props) => {
    //Live version without API throttle
    // useEffect(() => {
    //    props.fetchPosts()  
    // }, []) 
    
    //Mock version
    useEffect(() => {
       props.fetchMockPosts()  
    },[]) 


    const postItems =
    props.posts && props.posts.length > 0 ? (props.posts.map(post => (
        <p className="list-item" data-testid={`list-item-${post.title}`} key={post.id}>
            <span>{post.title} <br/>
            {post.owner.firstName}<br/>
            {post.owner.lastName}<br/>
            {post.picture}<br/>
            {post.publishDate}<br/>
            </span>
            <img src={post.owner.picture} alt="Owner avatar" width="50" height="50" className='avatar pic - person' />
            {/* <span>{post}</span> */}
            <img src={post.image} className='avatar for post' alt="Post picture" width="150" height="150"  />
            </p>
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

export default connect(mapStateToProps, { fetchPosts, fetchMockPosts })(Posts);
