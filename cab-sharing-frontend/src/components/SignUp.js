import React, { useState } from 'react';
import { signUp } from '../services/api'; // Ensure the correct path to api.js

const Signup = () => {
    const [formData, setFormData] = useState({
        dp: '',
        name: '',
        role: 'Student',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData); // Log the form data
        try {
            const response = await signUp(formData);
            alert(response);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="dp"
                placeholder="Display Picture URL"
                value={formData.dp}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
                <option value="Cab-Driver">Cab-Driver</option>
            </select>
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
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
