import ReactDOM from 'react-dom/client'
import "./tailwind.css";
import App from "./App";
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>

)

