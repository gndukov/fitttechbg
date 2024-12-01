import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import GoalsPage from './pages/GoalsPage';
import ChallengesPage from './pages/ChallengesPage';
import LoginPage from './pages/LoginPage';
import HomePageSecond from './pages/HomePageSecond';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/HomePageSecond" element={<HomePageSecond />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;