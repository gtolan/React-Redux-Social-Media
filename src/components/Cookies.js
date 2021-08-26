import '../styles/Cookies.scss';
// import {useState} from 'react';
import {HIDE_COOKIES} from '../store/actions/postActions'
import {useSelector, useDispatch} from 'react-redux'
closeCookiesBanner

const Cookies = () => {
    // const [cookieAlert, setCookieAlert] = useState(true);
    const cookiesHidden = useSelector(state => state.posts.cookiesHidden)
    const dispatch = useDispatch();


    const modalState = useSelector(state => state.posts.welcomeModalOpen)
    
    const hideCookieAlert = () =>{
        console.log('clicked',cookieAlert)
    const cookiesHidden = useSelector(state => state.posts.cookiesHidden)
        dispatch({type:'HIDE_COOKIES', payload:!cookiesHidden})
    }
    return (
        <div>
        {!modalState && (<div className={`cookies-container bg-dark d-flex justify-content-center flex-column  align-items-center p-4 ` + (modalState ? '': 'loaded')}>
            <p className='text-white'>By using Tweetter’s services you agree to our Cookies Use. We and our partners operate globally and use cookies, including for analytics, personalisation, and ads.</p>
            <button className='rounded-btn w-100 font-weight-bold' onClick={hideCookieAlert} >Close</button>
        </div>)}
        </div>
    )
}

export default Cookies;
