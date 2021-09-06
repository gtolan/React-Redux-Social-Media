import '../../styles/HomePage.scss';
import SignUpButtons from '../SignUpButtons.js';
import WelcomeBanner from '../WelcomeBanner.js';
import birdIconBlue from '../../styles/images/bird-blue.svg';
import musicNoteBlue from '../../styles/images/musical-note-blue.svg';
import Loading from '../Loading';
import { useSelector } from 'react-redux';


const HomePage = () => {

    const modalState = useSelector(state => state.posts.welcomeModalOpen);

    return (

        <div>
            <Loading />
            <div className="homepage-header">
                <div className={modalState ? `container-fluid p-4` : `container-fluid p-4  loaded`} >
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
// const mapStateToProps = state => ({
//     welcomeModalOpen : state.posts.welcomeModalOpen
// })
//export default connect(mapStateToProps, {welcomeModalOpen})(HomePage);
