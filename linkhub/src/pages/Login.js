import React from 'react'
import NavBar from "../components/NavBar.js"
import FieldInput from '../components/FieldInput.js';
import { useState }from 'react';
import Button from '../components/Button.js';

function Login(){
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    async function checkCredentials(){
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernameOrEmail, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials. Please try again');
            }

            const user = await response.json();
            console.log('Logged in user:', user);
            window.location.href = '/edit';

        } catch (error) {
            alert(error.message);
            // Handle error, e.g., show error message
        }
    }

    return (
        <div>
            <NavBar/>
            <div className="w-screen h-screen bg-dark flex flex-col items-center px-12">
                <h1 className="mt-[150px] font-bold text-white text-[40px]">welcome back!</h1>
                <div className="h-3/4 flex flex-col">
                    <div className="mt-[100px]">
                    <FieldInput label="username / email" type="text" placeholder={"banana@gmail.com"} value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)}/>
                    </div>
                    <div className="mt-[100px]">
                    <FieldInput label="password" type="password" placeholder={""} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="w-[650px] flex justify-between relative top-[5px]">
                        <a href="#" className="text-gray text-[15px]">forgot password?</a>
                        <a href="/signup" className="text-gray text-[15px]">sign up</a>
                    </div>
                    <a onClick={() => checkCredentials()} className="relative top-[100px] mx-auto">
                        <Button text="login" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Login;