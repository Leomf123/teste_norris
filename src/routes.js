import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './views/Home';

import Error404 from './views/Error';

import Header from './components/Header';
import Footer from './components/Footer';

import Categories from './views/categories';


const RouteComponent = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/categories/:category" element={ < Categories /> } />
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default RouteComponent;