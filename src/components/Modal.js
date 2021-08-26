import { useRef } from 'react';
import { connect,useSelector } from 'react-redux';
import { closeWelcomeModal } from '../store/actions/postActions';


const Modal = ({modalTitle, featureList,bodyTitle,closeWelcomeModal}) => {

    const modal = useRef(null);
    const modalState = useSelector(state => state.posts.welcomeModalOpen)

    const removeModal = () =>{
        closeWelcomeModal(modalState)
    }

    return (
        <div>
            {modalState && (<div ref={modal} className={`modal-welcome-info ` + (modalState ? '' : 'loaded')}>
            <div className="modal-welcome-header">
                <h4>{modalTitle}</h4>
            </div>
            <div className="modal-welcome-body">
              <h6>{bodyTitle}</h6>
              <ul> <br/>
              {featureList.map((feature,id) => (
                  (<li key={id}>{feature}</li>)
              ))}
                  {/* <li>Access the news feed via any login button </li>
                  <li> Add a new tweet to the news feed </li>
                  <li>Scrolling will load new tweets </li> */}
                </ul>
             
            </div>
            <div className="modal-welcome-footer">
            <button onClick={removeModal} className="rounded-btn font-weight-bold">Close</button>
            </div>
        </div>)}
        </div>
    )
}

const mapStateToProps = state => ({
    welcomeModalOpen : state.posts.welcomeModalOpen
})

export default connect(mapStateToProps, { closeWelcomeModal })(Modal);
