import Posts from './Posts';
import AddTweet from './AddTweet';
import Navbar from './Navbar';
import { useDispatch} from 'react-redux';
import {useEffect} from 'react';
// import ProfileBanner from '../components/ProfileBanner';

const News = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        hideCookieAlert();
    });

    const hideCookieAlert = () =>{
        console.log('clicked')
        // const currentBool = !cookiesHidden
        dispatch({type:'HIDE_COOKIES', payload:true})
        dispatch({type:'WELCOME_MODAL_OPEN', payload:true})
    }
    return (
        <div>
        <Navbar />
        <header className="App-header">
            <AddTweet/>
            {/* profile={profile} */}
            {/* <ProfileBanner  /> */}
            <hr/>
            <Posts />
        </header>
        </div>
    )
}

export default News;
