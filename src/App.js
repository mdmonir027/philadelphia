import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Apartments from './pages/Apartments';
import Authentication from './pages/Auth';
import UpcomingBookings from './pages/Booking/UpcomingBookings';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import SearchingBooking from './pages/HelpCenter/SearchingBooking';
import Home from './pages/Home';
import Profile from './pages/Profile/index';
import ProfileInfo from './pages/Profile/Info';
import SingleRoom from './pages/Room/Single';
import UpcomingTrips from './pages/Trips/UpcomingTrips';
import YourTrips from './pages/Trips/YourTrips';
import { routes } from './routes';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.help.center} element={<HelpCenter />} />
        <Route path={routes.searchingBooking} element={<SearchingBooking />} />
        <Route path={routes.profile.main} element={<Profile />} />
        <Route path={routes.profile.info} element={<ProfileInfo />} />
        <Route path={routes.room.single} element={<SingleRoom />} />
        <Route path={routes.trip.yours} element={<YourTrips />} />
        <Route path={routes.trip.upcoming} element={<UpcomingTrips />} />
        <Route path={routes.auth} element={<Authentication />} />
        <Route path={routes.booking.upcoming} element={<UpcomingBookings />} />
        <Route path={routes.apartments} element={<Apartments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
