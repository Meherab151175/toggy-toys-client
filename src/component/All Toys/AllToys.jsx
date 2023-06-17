import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const AllToys = () => {
    const [toys,setToys] = useState([])
    
    useEffect(()=>{
        fetch('https://toggy-toys-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    
    
    return (
        <div>
            <NavBar />
            {
                toys.map(toy=><ToyCard key={toy._id} toy={toy} />)
            }
        <Footer />
        </div>
    );
};

export default AllToys;