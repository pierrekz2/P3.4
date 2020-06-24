import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

export default function Coments() {
    const [coments, setComents] = useState([]);
    const postId = localStorage.getItem('postId');
    const namePost = localStorage.getItem('namePost');
    const history = useHistory();
    useEffect(() => {
        api.get(`comments?postId=${postId}`).then(response => {
            setComents(response.data);
        })
    }, [postId])

    return (
        <div className="container">
            <h1>Comentarios de {namePost}</h1>
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
                <strong onClick={() => history.push('/')}>Voltar</strong>
            </div>
        </div>
    )
}