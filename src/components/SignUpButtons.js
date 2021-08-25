import googleIcon from '../styles/googleIcon.svg';
import appleIcon from '../styles/appleIcon.svg';
import phoneCall from '../styles/phone-call.svg';
import twit from '../styles/twit.svg';
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
                 <button className="sign-up-button" key={option.text}>
                   {option.type != 'phone' ? (<img alt={option.text} src={option.icon ? option.icon : ''} className={`${option.type} icon-image`}  />) : ''}
                   <p>{option.text}</p> 
                 </button>
            ))}

            <p className="login-terms">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p className="login-now">Already have an account? <a className='login-link'href=''>Log in</a></p>
            <img src={twit} />
        </div>
    )
}

export default SignUpButtons;
