import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;