import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Shape from './components/Shape.jsx';
import Plugin from './components/Plugin.jsx';
import projectsData from './data/projectsData';
import Footer from './components/Footer.jsx';

import PrivatePage from './components/PrivatePage/PrivatePage'; // Secret page
import PrivateRoute from './components/PrivatePage/PrivateRoute'; // Route protection

function App() {
  return (
    <Router >
      <Routes>
        {/* Public routes */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Projects />
              <MusicPlayer albums={projectsData} />
              <Shape />
              <Plugin />
              <Footer />
            </>
          } 
        />

        {/* Private route - Secret page */}
        <Route 
          path="/private" 
          element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;