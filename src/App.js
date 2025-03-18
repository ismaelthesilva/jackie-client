import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Updated path
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Techniques from './pages/Techniques';
import Diet from './pages/Diet';
import PageOne from './pages/landingPages/pageOne/PageOne';
import IndexPage from './pages/landingPages/htmlText/index';
import BJJ40USA from "./pages/landingPages/bjjusa/bjj40usa";
import Performance2 from "./pages/landingPages/bjjusa/Performance2";
import BJJ40BR from './pages/landingPages/bjjbr/BJJ40BR';
import BJJMentoria from './pages/landingPages/bjjbr/BJJMentoria';
import Obrigado from './pages/landingPages/bjjbr/Obrigado';
import ObrigadoUpsell from './pages/landingPages/bjjbr/ObrigadoUpsell';
import { Outlet } from 'react-router-dom';

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function LayoutWithoutNavbar() {
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/diet" element={<Diet />} />
        </Route>

        {/* Pages without Navbar */}
        <Route element={<LayoutWithoutNavbar />}>
          <Route path="/PageOne" element={<PageOne />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/BJJ40USA" element={<BJJ40USA />} />
          <Route path="/Performance2" element={<Performance2 />} />
          <Route path="/BJJ40BR" element={<BJJ40BR />} />
          <Route path="/BJJMentoria" element={<BJJMentoria />} />
          <Route path="/Obrigado" element={<Obrigado />} />
          <Route path="/ObrigadoUpsell" element={<ObrigadoUpsell />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;