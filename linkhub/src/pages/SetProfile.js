import {React, useState} from 'react';
import SetName from './SetName.js';
import SetPicture from './SetPicture.js';

function SetProfile(){
    const [isSetName, togglePage] = useState(true);
    const handleChange = () =>{
        togglePage(!isSetName);
    }
    return(
        <div>
            {isSetName ? <SetName onNext={handleChange} /> : <SetPicture onPrev={handleChange}/>}
        </div>
    )
}

export default SetProfile;