import Tweets from '../Tweets';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddTweet from '../AddTweet';



const NewsFeedPage = () => {

    const hamburgerState = useSelector(state => state.posts.hamburgerActive);

    const dispatch = useDispatch();
    useEffect(() => {
        hideCookieAlert();
        console.log(hamburgerState)
    },
    [hamburgerState]);

    const hideCookieAlert = () =>{
        dispatch({type:'HIDE_COOKIES', payload:true})
        dispatch({type:'WELCOME_MODAL_OPEN', payload:true})
    }

    return (
        <div >
        <Navbar />
        <header className="App-header">
            <Tweets />
            {hamburgerState && (
                <AddTweet/>
            )}
        </header>
        </div>
    )
}

export default NewsFeedPage;
