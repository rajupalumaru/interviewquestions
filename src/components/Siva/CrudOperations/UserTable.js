import React from 'react'

const UserTable = (props) => (
  <center className='userid'>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone No.</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>
              <button className='button muted-button' onClick={()=>{props.editRow(user)}}>Edit</button>
              <button className='button muted-button' onClick={()=>{props.deleteUser(user.id)}}>Delete</button>
            </td>
          </tr>
        ))
      ):(
        <tr>
          <tr colspan={3}>No Users</tr>
        </tr>
      )
    }
    </tbody>
  </table>
  </center>
)
export default UserTable;