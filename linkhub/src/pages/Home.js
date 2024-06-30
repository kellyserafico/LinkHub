import React from 'react';
import "../styles.css"
import Graphic from "../assets/images/LinkHub_graphic.svg"
import Button from "../components/Button.js"
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const redirectTo = (path) => {
        navigate(path);
    }
    return (
        <div>
            <nav className="flex flex-row fixed w-screen justify-between px-12 py-6">
                <h1 className="font-museo text-[40px] text-white cursor-pointer" onClick={() => redirectTo("/")}>LinkHub</h1>
                <Button text="sign in"
                    onClick={() => redirectTo("/login")}/>
            </nav>
            <div className="w-screen h-screen bg-dark flex flex-row justify-between items-center px-12">
            <div className="h-1/2 flex flex-col justify-evenly">
                <h1 className="text-primary text-xl w-[630px] font-semibold">showcase everything about you in one simple link.</h1>
                <button
                    className="w-fit text-[30px] font-museo rounded-full border-2 border-white text-white px-4 py-2"
                    onClick={() => redirectTo("/signup")}
                    >get started</button>
            </div>
            <img src={Graphic} alt="LinkHub Graphic" />
            </div>
        </div>
    );
}

export default Home;