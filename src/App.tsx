import './App.css';
import React from "react";
import {MainSection} from "./layout/sections/main/MainSection";
import {Footer} from "./layout/Footer/Footer";
import {GreySector} from "./layout/sections/graySector/GreySector";
import {Generalsection} from "./layout/sections/generalSection/GeneralSection";
import {Header} from "./layout/Header/Header";
import {BrandsWorksSector} from "./layout/sections/brandsWorkSection/BrandsWork";
function App() {
    return (
        <Generalsection>
            <Header/>
            <MainSection/>
            <BrandsWorksSector/>
            <GreySector/>
            <Footer/>
        </Generalsection>
    );
}

export default App;
