import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from './authSlice';

const UserList = () => {
    const dispatch = useDispatch();

    const { users,loading , error } = useSelector((state) => {
        console.log(state)
        return state.auth;
    });

    useEffect(() => {
      dispatch(fetchUserList());
      console.log(users , "sfduif893523oe23904")
    }, [dispatch]);

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p className="text-red-500">{error}</p>;
    }
  
    return (
      <>
      <div>
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}> {/* assuming each user has a unique '_id' */}
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))
             ) : (
              <tr>
                <td colSpan="2">No users found</td>
              </tr>
            )} 
          </tbody>
        </table>


     
      </div>

<div>
<canvas id="canvas" width="500" height="500"></canvas>
<div id="dropArea">
    Drag and drop an image here
</div>
</div>

</>
    );
  };
  
  export default UserList;

  
