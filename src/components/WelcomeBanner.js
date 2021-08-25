import twit from '../styles/tweet-home.png';
import '../styles/SignUpButtons.scss';


const WelcomeBanner = () => {
    return (
        <div className="container-fluid welcome-banner">
        <img src={twit} alt='welcome banner'/>
     </div>
    )
}

export default WelcomeBanner;
