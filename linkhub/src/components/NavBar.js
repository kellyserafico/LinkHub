import React from 'react';
import "../styles.css"
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const redirectTo = (path) => {
        navigate(path);
    }
    return (
        <nav className="flex flex-row fixed">
            <h1
                className="font-museo text-[40px] text-white px-12 py-6 cursor-pointer"
                onClick={() => redirectTo("/")}>
                LinkHub
            </h1>
        </nav>
    );
}

export default NavBar;