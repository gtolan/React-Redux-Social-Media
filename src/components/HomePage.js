import '../styles/HomePage.scss';
import SignUpButtons from '../components/SignUpButtons.js';
import WelcomeBanner from '../components/WelcomeBanner.js';
import birdIconBlue from '../styles/bird-blue.svg';
import musicNoteBlue from '../styles/musical-note-blue.svg';
import Loading from './Loading';

const HomePage = () => {
    return (

        <div>
        <Loading />
        <div className="homepage-header">
            <div className="container-fluid p-4">
                <div className="container-fluid bird-navbar">
                    <div className="tweetter-blue-bird">
                        <a className="navbar-brand text-white" href="home">
                            <img src={musicNoteBlue} alt='music note' className="fade-transform-animaton"/>
                            <img src={birdIconBlue} alt='bird logo' />
                        </a>
                    </div>
                </div>
                <div className="container-fluid title-text">
                    <h1>Happening now</h1>
                    <h3>Join Tweeter today.</h3>
                </div>
                <SignUpButtons/>
            </div>
            <WelcomeBanner/>
        </div>
        </div>
    )
}

export default HomePage;
