import React from 'react';


// function isEqual(prev, next) {
//     return prev.firstName === next.firstName
//       && prev.image === next.image;
//   }

// React.memo(
const ProfileBanner = ({profile}) => {

    
    return (
        
        <div className="profile-container">
        {profile && (<div><div className="d-flex flex-column profile-banner">
            <div className="jumbotron-image">
                <div className="banner-wrapped">
                    <img className="profile-banner" alt="profile banner" src={profile?.image} />
                </div>
                <img className="profile-avatar" alt="profile avatar" src={profile.owner?.picture} />
            </div>
            <div className='profile-info'>
                {profile.firstName}
            </div>
            
        </div>
            <div className='profile-info'>
                <div className="left-col">
                    <h4>{profile.owner?.firstName}</h4>
                    <h5>{`@` + profile.owner?.firstName}</h5>
                </div>
                <div className="right-col">
                    <button className="follow-btn">Follow</button>
                </div>
            </div>
            <div className='profile-followers'>
                <p><strong>9,432</strong>Following</p> <p><strong>17,142</strong>Followers</p>
            </div>
            <div className="tweeters-nav">
                <h5>Tweets</h5>
            </div>
        </div>
        )}
        </div>
    )
}
//)

export default ProfileBanner;
