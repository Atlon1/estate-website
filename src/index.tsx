import ReactDOM from 'react-dom/client'
import "./tailwind.css";
import App from "./App";
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import HouseContextProvider from "./components/HauseContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HouseContextProvider>
        <Router>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Router>
    </HouseContextProvider>
)

