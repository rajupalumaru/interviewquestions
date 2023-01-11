import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';
import './Main.css';

const MainPage = () => {
    const userData = [
        {id:1, name: 'siva', phone:9000189914},
        {id:2, name: 'balu', phone:9876543210},
        {id:1, name: 'uma', phone:1234567890}
    ]

    const initialFormState ={ id:null, name: "", phone: ""};

    const [users, setUsers]=useState(userData);
    const [currentUsers, setCurrentUsers]=useState(initialFormState);
    const [editing, setEditing]=useState(false);

    const addUser = user =>{
        user.id = users.length + 1;
        setUsers([...users, user])
    }
    const updateUser = (id, updatedUser) =>{
        setEditing(false)
        setUsers(users.map(user=> (user.id === id ? updatedUser:user)));
    }
    const editRow = user =>{
        setEditing(true);
        setCurrentUsers(user);
    }
    const deleteUser = id =>{
        setEditing(false);
        setUsers(users.filter(user => user.id !== id));
    }
     
  return (
    <div>
        <h2>{editing ? "Edit User" : "Add User"}</h2>
        <EditUserForm
        addUser={addUser}
        updateUser={updateUser}
        currentUsers={currentUsers}
        setCurrentUsers={setCurrentUsers}
        editing={editing}
        setEditing={setEditing}/>
        <h2>View Users</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
    </div>
  )
}

export default MainPage