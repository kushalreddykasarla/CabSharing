import React, { useState } from 'react';
import { login } from '../services/api'; // Ensure the correct path to api.js

const Login = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData); // Log the form data
        try {
            const response = await login(formData);
            alert(response);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
