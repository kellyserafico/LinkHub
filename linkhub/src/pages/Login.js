import React from 'react'
import NavBar from "../components/NavBar.js"
import FieldInput from '../components/FieldInput.js';
import { useState }from 'react';
import Button from '../components/Button.js';

function Login(){
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <NavBar/>
            <div className="w-screen h-screen bg-dark flex flex-col items-center px-12">
                <h1 className="mt-[150px] font-bold text-white text-[40px]">welcome back!</h1>
                    <FieldInput label="username / email" type="text" placeholder={"banana@gmail.com"} value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)}/>
                    <FieldInput label="password" type="password" placeholder={""} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="w-[400px] flex justify-between relative top-[5px]">
                        <a href="#" className="text-gray text-[15px]">forgot password?</a>
                        <a href="#" className="text-gray text-[15px]">sign up</a>
                    </div>
                    <div className="relative top-[100px]">
                        <Button text="login" onClick={() => console.log("log in")} />
                    </div>
            </div>
        </div>
    );
};

export default Login;