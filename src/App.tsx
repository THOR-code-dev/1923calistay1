import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import About from './pages/About';
import DateTime from './pages/DateTime';
import Committees from './pages/Committees';
import Application from './pages/Application';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import { ROUTES } from './utils/constants';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.DATETIME} element={<DateTime />} />
          <Route path={ROUTES.COMMITTEES} element={<Committees />} />
          <Route path={ROUTES.APPLICATION} element={<Application />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
