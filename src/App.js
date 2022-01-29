import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import SearchingBooking from './pages/HelpCenter/SearchingBooking';
import Home from './pages/Home';
import { routes } from './routes';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.help.center} element={<HelpCenter />} />
        <Route path={routes.searchingBooking} element={<SearchingBooking />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
