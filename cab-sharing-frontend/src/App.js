import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';
import SignUp from './components/SignUp';
import PostTrip from './components/PostTrip';
import SearchTrips from './components/SearchTrips';
import BookingConfirmation from './components/BookingConfirmation';
import Login from './components/Login';  // New import

const App = () => {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />  // New route
                <Route path="/post-trip" element={<PostTrip />} />
                <Route path="/search-trips" element={<SearchTrips />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
