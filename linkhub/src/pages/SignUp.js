import React from 'react';
import NavBar from "../components/NavBar.js";
import FieldInput from '../components/FieldInput';
import Button from '../components/Button';
import {useState} from 'react';
function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function createUser() {
        try {
          const response = await fetch('http://127.0.0.1:8000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
          });
      
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error); // Throw an error with the message from the server
          }
      
          const newUser = await response.json();
          localStorage.setItem('user', JSON.stringify(newUser));
          console.log(newUser);
          alert('User created successfully');
        } catch (error) {
          console.error('Error creating user:', error.message);
          alert(`Error creating user: ${error.message}`);
        }
      }


    return(
        <div>
            <NavBar/>
            <div className="w-screen h-screen bg-dark flex flex-col items-center px-12">
                <h1 className="mt-[150px] font-bold text-white text-[40px]">create an account</h1>
                <div className="h-3/4 flex flex-col justify-evenly items-center">
                    <FieldInput label="username" type="text" placeholder={"banana"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <FieldInput label="email" type="email" placeholder={"banana"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <FieldInput label="password" type="password" placeholder={""} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <FieldInput label="confirm password" type="password" placeholder={""} />
                    <Button text="sign up" onClick={() => createUser()} />
                </div>
            </div>
        </div>
    )
}

export default SignUp;