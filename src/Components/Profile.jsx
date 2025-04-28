import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = () => {
    const {user}=use(AuthContext);
    return (
        <div className='py-8 mt-3 max-w-sm mx-auto'>
            <h1 className='text-bold'>{user.email}</h1>
        </div>
    );
};

export default Profile;