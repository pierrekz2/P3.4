import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Home() {
    const history = useHistory();
    const [posts, setPost] = useState([]);
    useEffect(() => {
        api.get('posts').then(response => {
            setPost(response.data)
        })
    })

    async function handleComents(id,name) {
        localStorage.setItem('postId', id)
        localStorage.setItem('namePost',name)
        history.push('/coments')
    }
    return (
        <div className="container">
            <h1>Prova P2: Mobile e IOT</h1>
            <div className="content">
                <ul>
                    {
                        posts.map(post => (
                            <div>
                                <li key={post.id} >
                                    <h1>{post.title}</h1>
                                    <p>{post.body}</p>
                                    <button className="btn" type="submit" onClick={() => handleComents(post.id,post.title)}> Ver comentarios</button>
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}