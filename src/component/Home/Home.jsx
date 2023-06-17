import Carosuel from "./Carosuel/Carosuel";
import NavBar from "../Shared/NavBar/NavBar";
import Gallery from "./Gallery/Gallery";
import Tabss from "../Tabs/Tabss";
import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("	sports car");
   
    
    useEffect(() => {
        fetch(`https://toggy-toys-server.vercel.app/allToys/${activeTab}`)
          .then((res) => res.json())
          .then((data) => setToys(data));
      }, [activeTab]);  



  
    const handleTab = (text) => {
      setActiveTab(text);
    };
    
    
    return (
        <div className=''>
            <NavBar />
            <Carosuel />
            <Gallery />
            <div className="my-10"></div>
            <Tabss 
                handleTab={handleTab}
                toys={toys}
             />
             <Footer />
        </div>
    );
};

export default Home;