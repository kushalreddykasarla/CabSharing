import React, { useState } from 'react';
import { postTrip } from '../services/api';

const PostTrip = () => {
    const [tripData, setTripData] = useState({
        destination: '',
        departureTime: '',
        estimatedArrivalTime: '',
        price: '',
        hostName: '',
        hostPhone: ''
    });

    const handleChange = (e) => {
        setTripData({
            ...tripData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postTrip(tripData)
            .then(response => {
                alert('Trip posted successfully');
            })
            .catch(error => {
                alert('Error posting trip');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Post a Trip</h2>
            <label>
                Destination:
                <input type="text" name="destination" value={tripData.destination} onChange={handleChange} required />
            </label>
            <label>
                Departure Time:
                <input type="datetime-local" name="departureTime" value={tripData.departureTime} onChange={handleChange} required />
            </label>
            <label>
                Estimated Arrival Time:
                <input type="datetime-local" name="estimatedArrivalTime" value={tripData.estimatedArrivalTime} onChange={handleChange} required />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={tripData.price} onChange={handleChange} required />
            </label>
            <label>
                Host Name:
                <input type="text" name="hostName" value={tripData.hostName} onChange={handleChange} required />
            </label>
            <label>
                Host Phone:
                <input type="text" name="hostPhone" value={tripData.hostPhone} onChange={handleChange} required />
            </label>
            <button type="submit">Post Trip</button>
        </form>
    );
};

export default PostTrip;
