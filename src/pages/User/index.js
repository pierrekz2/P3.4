import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import api from '../../services/api';

export default function Home(){
    const history = useHistory();
    const [posts, setPost] = useState([]);


    useEffect(() => {
        api.get('posts').then(response =>{
            setPost(response.data)
        })
    })
    async function handleComents(id){
        localStorage.setItem('postId',id)
        history.push('comentarios')
    }
    return (
        
        <div className="container">
        <h1>P3</h1>
        <div className="content">
            <ul>
                {
                    posts.map(post => (
                        <div>
                        <li key={user.id} >
                            <strong> user NÚMERO {user.id}</strong>
                            <h1>{user.name}</h1>
                            <p>{user.username}</p>

                        </li>
                    </div>
                    ))
                }
            </ul>
        </div>
    </div>
    )
}