import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/ContentPages/MainPage/MainPage";
import NewPage from "./Components/ContentPages/NewPage/NewPage";
import DiscountsPage from "./Components/ContentPages/DiscountsPage/DiscountsPage";
import CatalogPage from "./Components/ContentPages/CatalogPage/CatalogPage";
import {Route, Routes, Navigate} from "react-router-dom";
import Contacts from "./Components/ContentPages/Contacts/Contacts";
import Reviews from "./Components/ContentPages/Reviews/Reviews";
import Basket from "./Components/ContentPages/Basket/Basket";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/new" element={<NewPage newData={props.appState.catalogData}/>}/>
                <Route path="/discounts" element={<DiscountsPage discountsData={props.appState.catalogData}/>}/>
                <Route path="/catalog" element={<CatalogPage catalogsData={props.appState.catalogData}/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/reviews" element={<Reviews rewiewsData={props.appState.rewiewsData}
                                                         dispatch={props.dispatch}/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;