import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
    return (
        <div className='max-w-[1440px] mx-auto bg-white'>
            <Header/>
            <Routes>
                <Route path='/estate-website' element={<Home/>}/>
                <Route path='/estate-website/property/:id' element={<PropertyDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
