import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import Vacancy from "./pages/Vacancy";
import ScrollToTop from "./components/hook/ScrollToTop";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import NotaFound from "./pages/NotaFound";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <ScrollToTop/>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route exact path="prices" element={<Prices/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="vacancy" element={<Vacancy/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NotaFound/>}/>
                </Routes>


            </BrowserRouter>


        </div>
    );
}

export default App;
