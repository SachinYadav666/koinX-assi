import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CryptoTaxes from '../pages/CryptoTaxes.jsx';
import HomePage from '../pages/HomePage.jsx';
import FreeTools from '../pages/FreeTools.jsx';
import ResourceCenter from '../pages/ResourceCenter.jsx';
import CoinDetail from '../pages/CoinDetail.jsx'
import NotFound from '../pages/NotFound.jsx'
import GetStarted from '../pages/GetStarted.jsx'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto-taxes" element={<CryptoTaxes />} />
        <Route path="/free-tools" element={<FreeTools />} />
        <Route path="/resource-center" element={<ResourceCenter />} />
        <Route path="/get-started" element={<GetStarted />} />

         {/* Route with dynamic parameter */}
        <Route path="/coins/:coin" element={<CoinDetail/>} />

        {/* Fallback route for handling 404 errors */}
        <Route path="*" element={<NotFound/>} />
    </Routes>
);

export default AppRoutes;
