import '../styles/Cookies.scss';
import {useSelector, useDispatch} from 'react-redux'


const Cookies = () => {
    const modalState = useSelector(state => state.posts.welcomeModalOpen)
    const dispatch = useDispatch();
    const cookiesState = useSelector(state => state.posts.cookiesHidden)
 
    const hideCookieAlert = () =>{
        dispatch({type:'HIDE_COOKIES', payload:true})
    }
    return (
        <div>
            <div className={`cookies-container bg-dark d-flex justify-content-center flex-column  align-items-center p-4 ` + (modalState ? '': `loaded `) + (cookiesState ? 'hide' :'') }>
                <p className='text-white'>By using Tweetter’s services you agree to our Cookies Use. We and our partners operate globally and use cookies, including for analytics, personalisation, and ads.</p>
                <button className='rounded-btn w-100 font-weight-bold' onClick={hideCookieAlert} >Close</button>
            </div>
        </div>
    )
}

export default Cookies;
