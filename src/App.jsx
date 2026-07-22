import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewList from "./pages/NewList"
import Inventory from "./pages/Inventory";
import { useState } from "react";

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/New" element={<NewList />} />
                <Route path="/Inventory" element={<Inventory />} />

            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default App;