import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../Interface/interface';

const UserInf: React.FC = () => {
    const [userData, setUserData] = useState<IUser[] | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUserData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    {userData.map((user, id) => (
                        <div key={id}>
                            <p>Name: {user.name}</p>
                            <p>Address: City {user.address.city}, street {user.address.street}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export { UserInf };