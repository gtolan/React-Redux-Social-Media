import '../styles/HomePage.scss';
import {useEffect, useRef} from 'react';
import birdIconBlue from '../styles/bird-blue.svg';
import musicNoteBlue from '../styles/musical-note-blue.svg';
import Modal from './Modal';
import {useSelector} from 'react-redux';

const Loading = () => {
    const spinner = useRef(null);
    const twetterIcon = useRef(null);
    const loaderPage = useRef(null);
    const modalState = useSelector(state => state.posts.welcomeModalOpen)

    const hideLoader =() => {
        setTimeout(()=>{
                console.log('hide loader')
                const icon = twetterIcon.current; // corresponding DOM node    
                icon.className = "show-icon";
                const span = spinner.current; // corresponding DOM node    
                span.className = "spinner-border fade";
                hidePage()
                    },1400)
    }

    const hidePage = () =>{
        setTimeout(()=>{
                        const page = loaderPage.current;
                        page && (page.className = "loading disolve-page")
                        },1500)
    }

    useEffect(() => {    
        hideLoader();
    })

    const modalTitle = 'Welcome to Tweeter';
    const bodyTitle= 'This is a sample application:';
    const featureList = ['Access the news feed via any login button',
        'Add a new tweet to the news feed',
        'Scrolling will load new tweets'];

    return (
        <div className={`loading-page ` + (modalState ? '' : 'loaded')}>
            <Modal { ...{modalTitle, featureList,bodyTitle}}/>
                <div ref={loaderPage} className="loading">
                    <div ref={spinner} className="spinner-border " role="status">
                        <span className="sr-only"></span>
                    </div>
                    <a ref={twetterIcon} className="navbar-brand text-white hidden-icon" href="home">
                        <div className="icon">
                            <img src={musicNoteBlue} className="fade-transform-animaton" alt="tweeter icon"/>
                            <img src={birdIconBlue} className="svg-img-icon" alt="tweeter icon"/>
                        </div>
                    </a>
                </div>
        </div>
    )
}

export default Loading;
