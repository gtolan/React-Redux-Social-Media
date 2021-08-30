import '../styles/Navbar.scss';
import birdIcon from '../styles/images/bird.svg';
import musicNote from '../styles/images/musical-note.svg';
import {useSelector,useDispatch} from 'react-redux';

const Navbar = () => {

    const hamburgerState = useSelector(state => state.posts.hamburgerActive)
    const dispatch = useDispatch();

    const toggleHamburger = () => {
        dispatch({type:'TOGGLE_HAMBURGER', payload: hamburgerState})
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="home">
                        <img src={musicNote} alt='music note' className="fade-transform-animaton"/>
                        <img src={birdIcon} alt='bird logo' />
                    </a>
                    <button className={`hamburger hamburger--vortex ` + (hamburgerState ? 'huh' : 'is-active')} onClick={toggleHamburger} type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                    </button>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
