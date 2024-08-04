import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer'
import MiddleSections from './Components/MiddleSections/MiddleSections';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <MiddleSections />
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
