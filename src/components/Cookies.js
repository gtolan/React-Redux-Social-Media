import '../styles/Cookies.scss';
import {useState} from 'react';


const Cookies = () => {
    const [cookieAlert, setCookieAlert] = useState(true)

    const hideCookieAlert = () =>{
        console.log('clicked',cookieAlert)
        setCookieAlert(!cookieAlert)
    }
    return (
        <div>
        {cookieAlert && (<div className='cookies-container bg-dark d-flex justify-content-center flex-column  align-items-center p-4'>
            <p className='text-white'>By using Tweetter’s services you agree to our Cookies Use. We and our partners operate globally and use cookies, including for analytics, personalisation, and ads.</p>
            <button className='rounded-btn w-100 font-weight-bold' onClick={hideCookieAlert} >Close</button>
        </div>)}
        </div>
    )
}

export default Cookies;
