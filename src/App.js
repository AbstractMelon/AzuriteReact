import React, { useEffect } from 'react';
import './index.css';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies] = useCookies(['theme']);

    useEffect(() => {
        const theme = cookies.theme || 'none';
        document.body.className = '';
        document.body.classList.add(theme);
    }, [cookies.theme]);

    return (    
    <router> 
    <Main />
    <Header />

    <div className='container uncoloured'>
    <Outlet />
    </div>
    
    <Footer />

    </router>  );
}

export default App;