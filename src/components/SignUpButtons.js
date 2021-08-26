import googleIcon from '../styles/googleIcon.svg';
import appleIcon from '../styles/appleIcon.svg';
import phoneCall from '../styles/phone-call.svg';
import { Link } from 'react-router-dom';
import '../styles/SignUpButtons.scss';

const SignUpButtons = () => {

    const options = [
        {icon:googleIcon, text:'Sign up with Google', type:'google'},
        {icon:appleIcon, text:'Sign up with Apple', type:'apple'},
        {icon:phoneCall, 
          type:'phone',
          text:'Sign up phone or email'}
    ];

    return (
 
        <div className='container-fluid sign-up-container'>
          
            {options.map(option => (
              <Link to="/news" className="btn-wrap" key={option.text}>
                 <button className="sign-up-button" key={option.text}>
                   {option.type !== 'phone' ? (<img alt={option.text} src={option.icon ? option.icon : ''} className={`${option.type} icon-image`}  />) : ''}
                   <p key={option.text}>{option.text}</p> 
                 </button>
                 </Link>
            ))}

            <p className="login-terms">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p className="login-now">Already have an account? <a className='login-link'href='/home'>Log in</a></p>
           
        </div>


    )
}

export default SignUpButtons;
