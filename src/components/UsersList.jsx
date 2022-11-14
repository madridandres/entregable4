import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser}) => {
    return (
        
        <ul>
            {
                usersList.map(user => (
                    <li key={user.id}>
                        <div>
                            <div className='user-info'><h3><b>{user.first_name}  {user.last_name}</b></h3></div>
                            <div className='user-info'>{user.email}</div>
                            <div className='user-info'><i class="fa-solid fa-cake-candles"></i>{user.birthday}</div>
                        </div>
                        <div>
                            <button className='card-user' onClick={() => deleteUser(user)}>
                            <i class="fa-solid fa-trash"></i>
                            </button>
                            <button className='card-user' onClick={() => selectUser(user)}>
                            <i class="fa-solid fa-pencil"></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;