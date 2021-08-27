import {useSelector} from 'react-redux';
import {useEffect, mapStateToProps} from 'react';


const ProfileBanner = ({profile}) => {

    return (
        
        <div>
        {profile && (<div><div className="d-flex flex-column profile-banner">
           <div className="jumbotron-image">
               <div className="banner-wrapped">
                    <img className="profile-banner" alt="profile banner" src={profile.image} />
                </div>
                <img className="profile-avatar" alt="profile avatar" src={profile.owner.picture} />
            </div>

            <div className='profile-info'>
                {profile.firstName}
            </div>
            
        </div>
        <div className='profile-info'>
            {profile.owner.firstName}
        </div>
        </div>
        )}
        </div>
    )
}

export default ProfileBanner;
