import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchMockPosts } from '../store/actions/postActions';
import PropTypes from 'prop-types';
import '../styles/Tweets.scss';
import ProfileBanner from './ProfileBanner';
import likeIcon from '../styles/images/like.svg';

const Tweets = (props) => {
    //Live version without API throttle
    // useEffect(() => {
    //    props.fetchPosts()  
    // }, []) 
    
    //Mock version
    useEffect(() => {
        // const getPosts = async()=>{
        // console.log('POSTS, use Effect')
        // const data = await props.fetchMockPosts() 
        // console.log('dataPost effect', data)
        // } 
        // getPosts()
        props.fetchMockPosts() 

    },[]) 


    const postItems =
    props.posts && props.posts.length > 0 ? (props.posts.map(post => (
        <li className="list-item" data-testid={`list-item-${post?.title}`} key={post?.id}>
            <img src={post?.owner?.picture} alt="Owner avatar" width="50" height="50" className='avatar pic - person' />

            <div className="right-column">
                <div className="image-wrapper">
                     <div className="card-main-image">
                        <img src={post?.image} className='tweet-image' alt="tweet main content"  />
                     </div>
                     <div className="image-content">
                         <ul className="image-tags">
                             {post.tags && (post.tags.map(item => (<li>{item}</li>)))}
                        </ul>
                        <p className="post-text">{post.text}</p>
                        <div className="post-likes">
                                    <img className="likes-thumb-icon" src={likeIcon} alt="tweet likes icon" />
                                    <p>{post.likes}</p>
                        </div>
                        
                     </div>
                </div>
            </div>
            </li>
    ))) : ('No posts');

    return (
        <div>
            {props.posts ? (<ProfileBanner profile={props.posts[0]}/> ) : ''}
            <ul className="tweet-list">
            { postItems }
            </ul>
        </div>
    );
}

Tweets.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts : state.posts.items, //from reduce combine naming,
    newPost : state.posts.item
})

export default connect(mapStateToProps, { fetchPosts, fetchMockPosts })(Tweets);
