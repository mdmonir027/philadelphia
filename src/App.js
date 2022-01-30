import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import SearchingBooking from './pages/HelpCenter/SearchingBooking';
import Home from './pages/Home';
import Profile from './pages/Profile/index';
import ProfileInfo from './pages/Profile/Info';
import Settings from './pages/Settings';
import BillingSettings from './pages/Settings/Billing';
import GlobalPreference from './pages/Settings/GlobalPreference';
import InfoSetting from './pages/Settings/Info';
import LoginSetting from './pages/Settings/Login';
import NotificationSetting from './pages/Settings/Notificaiton';
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
        <Route path={routes.settings.main} element={<Settings />} />
        <Route path={routes.settings.billing} element={<BillingSettings />} />
        <Route
          path={routes.settings.globalPreference}
          element={<GlobalPreference />}
        />
        <Route path={routes.settings.info} element={<InfoSetting />} />
        <Route path={routes.settings.login} element={<LoginSetting />} />
        <Route
          path={routes.settings.notifications}
          element={<NotificationSetting />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
