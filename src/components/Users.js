import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]); // State to hold user data

  useEffect(() => {
    axios.get('https://bjjchamp-server.vercel.app/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div>
      <h2>BJJChamp Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li> // Adjust based on your user data structure
        ))}
      </ul>
    </div>
  );
}

export default Users;