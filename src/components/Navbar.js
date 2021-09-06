import '../styles/Navbar.scss';
import birdIcon from '../styles/images/bird.svg';
import musicNote from '../styles/images/musical-note.svg';
import backArrow from '../styles/images/arrow.svg';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const Navbar = () => {

    const hamburgerState = useSelector(state => state.posts.hamburgerActive)
    const dispatch = useDispatch();
    
    const dispathToggleAddTweet = () => {
        dispatch({type:'TOGGLE_HAMBURGER', payload: hamburgerState})
    }
    
    const toggleAddTweet = useCallback(() => {
        dispathToggleAddTweet()
    },
    [hamburgerState]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <div className="container-fluid">
                    <Link to='/home' className='navbar-brand text-white'>
                        <img src={musicNote} alt='music note' className="fade-transform-animaton"/>
                        <img src={birdIcon} alt='bird logo' />
                    </Link>
                    <Link to='' className='back-link'>
                        <button className='back-btn'>
                                <img src={backArrow} alt="back arrow" className='back-arrow-icon'/>
                        </button>
                    </Link>
                    <button className="add-tweet-btn" type="button" onClick={toggleAddTweet}>Add Tweet</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
