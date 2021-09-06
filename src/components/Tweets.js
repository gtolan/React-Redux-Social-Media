import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
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
    const posts = useSelector(state => state.posts.items)
    const fadeNewsFeed = useSelector(state => !state.posts.hamburgerActive)


    //Mock version
    useEffect(() => {
        // const getPosts = async()=>{
        // console.log('POSTS, use Effect')
        // const data = await props.fetchMockPosts() 
        // console.log('dataPost effect', data)
        // } 
        // getPosts()
        props.fetchMockPosts();
    
    },[]) 

    useEffect(() => {
        // const getPosts = async()=>{
        // console.log('POSTS, use Effect')
        // const data = await props.fetchMockPosts() 
        // console.log('dataPost effect', data)
        // } 
        // getPosts()
        // props.fetchMockPosts();
        console.log('RE-render tweets', posts)
    },[posts]) 

        console.log('render tweets', posts)

    const postItems =
    posts && posts.length > 0 ? (posts.map((post, index) => (
        (<li className="list-item" data-testid={`list-item-${post?.image}`} key={post.image ? (post?.image + index) : (post.id + index)}>
            <img src={post?.owner?.picture} alt="Owner avatar" width="50" height="50" className='avatar pic - person' />

            <div className="right-column">
                <div className="image-wrapper">
                     <div className="card-main-image">
                        <img src={post?.image} className='tweet-image' alt="tweet main content"  />
                     </div>
                     <div className="image-content">
                         <ul className="image-tags">
                             {post.tags && (post.tags.map((item, id) => (<li key={post.id + id}>{item}</li>)))}
                        </ul>
                        <p className="post-text">{post.text}</p>
                        <div className="post-likes">
                                    <img className="likes-thumb-icon" src={likeIcon} alt="tweet likes icon" />
                                    <p>{post.likes}</p>
                        </div>
                        
                     </div>
                </div>
            </div>
            </li>)
    ))) : ('No posts');

    return (
        <div className={fadeNewsFeed ? 'news-feed' : 'news-feed-faded'}>
            {props.profile ? (<ProfileBanner profile={props.profile}/> ) : ''}
            <ul className="tweet-list">
            { postItems }
            </ul>
        </div>
    );
}

Tweets.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    // posts : state.posts.items, //from reduce combine naming,
    newPost : state.posts.item,
    profile : state.posts.profile
})

export default connect(mapStateToProps, { fetchPosts, fetchMockPosts })(Tweets);
