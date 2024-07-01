import {React} from 'react';
import NavBar from "../components/NavBar.js";
import FieldInput from '../components/FieldInput.js';
import Button from '../components/Button.js';
import {useState, useEffect} from 'react';
function SetName({onNext}){
    const [name, setName] = useState("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            // If no user is found in local storage, redirect to login
            window.location.href = '/login';
        }
    }, []);

    const handleUpdateName = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            try {
                const response = await fetch(`http://localhost:8000/users/${user.id}/name`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name }),
                });

                if (!response.ok) {
                    throw new Error('Failed to update name. Please try again.');
                }

                const updatedUser = await response.json();
                user.name = updatedUser.name;
                localStorage.setItem('user', JSON.stringify(user));
                onNext();
                // alert('Name updated successfully!');
            } catch (error) {
                alert(error.message);
                // Handle error, e.g., show error message
            }
        } else {
            alert('User not found. Please log in again.');
        }
        console.log(user)
    };

    return (
        <div>
            <NavBar/>
            <div className="w-screen h-screen bg-dark flex flex-col items-center px-12">
                <h1 className="mt-[150px] font-bold text-white text-[40px]">welcome to LinkHub</h1>
                <div className="relative top-[70px] flex flex-col items-center justify-around h-1/2">
                    <h2 className="mt-4 text-white text-[30px] font-medium">first off, what's your name?</h2>
                    <FieldInput label="" type="text" placeholder={"banana"} width={"500px"} onChange={(e) => setName(e.target.value)}/>
                    <Button text="next" onClick={() => {
                        handleUpdateName();
                        // window.location.href = '/setpicture';
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default SetName;