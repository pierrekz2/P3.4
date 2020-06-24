import React, { useState, useEffect } from 'react';
import api from '../../services/api'

export default function Coments() {
    const [coments, setComents] = useState([]);
    const postId = localStorage.getItem('postId')
    useEffect(() => {
        api.get(`comments?postId=${postId}`).then(response => {
            setComents(response.data);
        })
    }, [postId])

    return (
        <div className="container">
            <h1>Comentarios</h1>
            <div className="content">
                <ul>
                    {
                        coments.map(coment => (
                            <li key={coment.id}>
                                <div>
                                    <p> {coment.name} </p>
                                    <p> {coment.email }</p>
                                    <strong> {coment.body} </strong>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}