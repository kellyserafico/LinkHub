import {React, useEffect, useState} from "react";
import NavBar from "../components/NavBar.js";
import Button from "../components/Button";
import PfpIcon from "../assets/images/pfp_icon.svg";
function SetPicture({onPrev}){
    const [name, setName] = useState('');
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            // If no user is found in local storage, redirect to login
            window.location.href = '/login';
        }
        setName(user.name);
        console.log(name);
    }, []);

    return(
        <div>
            <NavBar/>
            <div className="w-screen h-screen bg-dark flex flex-col items-center px-12">
                <h1 className="mt-[150px] font-bold text-white text-[40px]">hello, {name}.</h1>
                <img src={PfpIcon} alt="profile picture icon" className="mt-[75px]"/>
                <h2 className="mt-[60px] font-medium text-white text-[40px]">add an avatar</h2>
                <div className="flex flex-row mt-16 w-[400px] justify-evenly">
                    <Button text="back to name" onClick={() => onPrev()}/>
                    <Button text="start linking!" onClick={() => window.location.href = '/edit'}/>
                </div>
            </div>
        </div>
    )
}
export default SetPicture;