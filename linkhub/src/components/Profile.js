import React from 'react';
import PfpIcon from '../assets/images/pfp_icon.svg';
import Link from './Link';
function Profile(){
    return (
        <div className="text-center mt-[40px]">
            <img src={PfpIcon} alt="profile picture icon" className="w-[200px] mx-auto"/>
            <p className="font-medium text-[40px]">Apple Banana</p>
            <p className="font-regular text-gray text-[20px]">@applebanana</p>
            <p className="font-regular text-[20px]">this is a bio</p>
        </div>
    );
}

export default Profile;