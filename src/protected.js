import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let id = localStorage.getItem("token")
        if (!id) {
            navigate("/login")
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}
export default Protected