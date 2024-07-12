import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';
const TRIP_API_URL = 'http://localhost:8081/api/trips';

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Error signing up');
    }
};

export const login = async (loginData) => {
    console.log('Sending login data:', loginData); // Log the data being sent
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error logging in');
    }
};

export const postTrip = async (tripData) => {
    console.log('Sending trip data:', tripData); // Log the data being sent
    try {
        const response = await axios.post(`${TRIP_API_URL}/post`, tripData);
        return response.data;
    } catch (error) {
        console.error('Error posting trip:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error posting trip');
    }
};

export const searchTrips = async (destination, start, end) => {
    console.log('Searching trips with criteria:', { destination, start, end }); // Log the search criteria
    try {
        const response = await axios.get(`${TRIP_API_URL}/search`, {
            params: { destination, start, end }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching trips:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error searching trips');
    }
};

export const bookTrip = async (bookingData) => {
    console.log('Booking trip with data:', bookingData); // Log the booking data
    try {
        const response = await axios.post(`${TRIP_API_URL}/book`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error booking trip:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error booking trip');
    }
};
