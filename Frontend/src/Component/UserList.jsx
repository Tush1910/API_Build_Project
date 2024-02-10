import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get(`/api/users?username=${filter}`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [filter]);

  return (
    <div>
      <div class="ms-3 mt-4 " style={{width: '50rem'}}>
          <h2 className='mb-3 ms-3 '>User List</h2>
          <form action="">
            <input class="form-control ms-3 " type="text" placeholder="Filter by username" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <button className="btn btn-primary mt-2 ms-3">Search</button>
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
          </form>
      </div>
    </div>
  );
};

export default UserList;
