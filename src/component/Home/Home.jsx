import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Tabss from "../Tabs/Tabss";
import Carosuel from "./Carosuel/Carosuel";
import Gallery from "./Gallery/Gallery";
import Footer from "../Shared/Footer/Footer";
import ToysCard from "../ToyCard/ToysCard";



const Home = () => {
  
    
    
    return (
        <div className=''>
          <NavBar />
          <Carosuel />
          <Gallery />
          <Tabss />
          <ToysCard />
          <Footer />
        </div>
    );
};

export default Home;