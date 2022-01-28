import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HelpCenter from './pages/HelpCenter';
// import Home from './pages/Home';
import { routes } from './routes';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path={routes.home} element={<Home />} /> */}
        <Route path={routes.help.center} element={<HelpCenter />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
