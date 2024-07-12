import React, { useState } from 'react';
import { searchTrips } from '../services/api';

const SearchTrips = () => {
    const [searchParams, setSearchParams] = useState({
        destination: '',
        start: '',
        end: ''
    });

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        searchTrips(searchParams.destination, searchParams.start, searchParams.end)
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    setTrips(response.data);
                } else {
                    setError('No trips found.');
                    setTrips([]);
                }
                setLoading(false);
            })
            .catch(error => {
                setError('Error searching trips');
                setLoading(false);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Search Trips</h2>
                <label>
                    Destination:
                    <input type="text" name="destination" value={searchParams.destination} onChange={handleChange} required />
                </label>
                <label>
                    Start Time:
                    <input type="datetime-local" name="start" value={searchParams.start} onChange={handleChange} required />
                </label>
                <label>
                    End Time:
                    <input type="datetime-local" name="end" value={searchParams.end} onChange={handleChange} required />
                </label>
                <button type="submit">Search</button>
            </form>

            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}

            <h3>Available Trips</h3>
            <ul>
                {trips.length > 0 ? (
                    trips.map(trip => (
                        <li key={trip.id}>
                            {trip.destination} - {trip.departureTime} - {trip.price}
                        </li>
                    ))
                ) : (
                    !loading && <li>No trips found.</li>
                )}
            </ul>
        </div>
    );
};

export default SearchTrips;
