import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

import App from "./routes/App";
import Desktop from "./routes/Desktop";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Networks from "./routes/Networks";
import Rights from "./routes/Rights";
import Specialties from "./routes/Specialties";
import Unknown from "./routes/Unknown";

// Attributs
const root = ReactDOM.createRoot(document.getElementById('root'));

// Routes
root.render(
<>
  <React.StrictMode> 
    <BrowserRouter>
        <WavyContainer />
        <Routes>
          {/* Default Website Route */}
          <Route path="/" element={<App title="Homepage | thomaspsl"/>} >

            {/* New Website Routes */}
            <Route path="/" element={<Home title="Homepage | thomaspsl"/>}  />
            <Route path="/desktop" element={<Desktop title="Desktop | thomaspsl"/>} />
            <Route path="/projects" element={<Projects title="Projects | thomaspsl"/>} />
            <Route path="/specialties" element={<Specialties title="Specialties | thomaspsl"/>} />
            <Route path="/networks" element={<Networks title="Networks | thomaspsl"/>} />
            <Route path="/rights" element={<Rights title="Rights | thomaspsl"/>} />

            {/* Old Website Routes */}
            <Route path="/portfolio" render={() => {window.location.href="index.html"}} />
            <Route path="/portfolio/profile.html" render={() => {window.location.href="public/portfolio/profile.html"}} />
            <Route path="/portfolio/education.html" render={() => {window.location.href="education.html"}} />

            {/* Unknow Routes */}
            {/* <Route path="/404" element={<Unknown title="404page | thomaspsl"/>} />
            <Route path='/*' element={<Navigate replace to="/404"/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter> 
  </React.StrictMode>
</>
);