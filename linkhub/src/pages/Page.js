import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

function Page() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []) 
    async function getUsers(){
        const response = await fetch('http://127.0.0.1:8000/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }
return (
    <div>
        {users.map(user => (
            <h1 key={user.id}>{user.id} {user.name} {user.email}</h1>
        ))}
    </div>
);
}

export default Page;