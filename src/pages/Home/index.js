import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './style.css';

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    })

    return (
        <div className="container">
            <h1>Prova P2: Mobile e IOT</h1>
            <div className="content">
                <ul>
                    {
                        users.map(user => (
                            <div>
                                <li key={user.id} >
                                    <h1>{user.name}</h1>
                                    <h2>{user.username}</h2>
                                    <p>{user.email}</p>
                                    <h2>Endereco:</h2>
                                    <p>{user.address.street}</p>
                                    <p>{user.address.suite}</p>
                                    <p>{user.address.city}</p>
                                    <p>{user.address.zipcode}</p>

                                    <h2>Lat:{user.address.geo.lat} long:{user.address.geo.lng}  </h2>
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}