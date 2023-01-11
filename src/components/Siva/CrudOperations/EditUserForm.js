import React, { useEffect, useState } from 'react'

const EditUserForm = props => {
    const initialFormState ={ id:null, name: "", phone: ""}
    const [user, setUser] = useState(
        props.editing ? props.currentUsers : initialFormState
    );

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setUser({...user,[name]:value});
    }
    useEffect(()=>{
        setUser(props.currentUsers);
    },[props    ])
    const handleSubmit = e =>{
        e.preventDefault();
        if(!user.name || !user.phone)return;
        props.editing ? props.updateUser(user.id, user): props.addUser(user);
        resetAddUser();        
    }
    const resetAddUser =() =>{
        props.setEditing(false);
        setUser(initialFormState);
        props.setCurrentUser(initialFormState);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>&nbsp;
            <input type='text' name='name' value={user.name} onChange={handleInputChange}></input>&nbsp;
            <label>Phone No.</label>&nbsp;
            <input type='text' name='phone' value={user.phone} onChange={handleInputChange}></input>&nbsp;
            <button>{props.editing ? "Update User" : "Add User"}</button>
            {props.editing && (
            <button onClick = {resetAddUser} className="button muted-button">
                Cancel
            </button>
            )}
        </form>
    </div>
  )
}

export default EditUserForm