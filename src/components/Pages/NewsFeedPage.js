import Tweets from '../Tweets';
// import AddTweet from '../AddTweet';
import Navbar from '../Navbar';
import { useDispatch} from 'react-redux';
import {useEffect} from 'react';



const NewsFeedPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        hideCookieAlert();
    });

    const hideCookieAlert = () =>{
        dispatch({type:'HIDE_COOKIES', payload:true})
        dispatch({type:'WELCOME_MODAL_OPEN', payload:true})
    }
    return (
        <div>
        <Navbar />
        <header className="App-header">
            {/* <AddTweet/> */}
            <Tweets />
        </header>
        </div>
    )
}

export default NewsFeedPage;
