import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const AllToys = () => {
    const [toys,setToys] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(()=>{
        fetch('https://toggy-toys-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])

    const handleSearch = () => {
        fetch(
          `https://toggy-toys-server.vercel.app/toySearch/${search}`
        )
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
          })
      };
    
    
    return (
        <div>
            <NavBar />
            <div className="join">
  <div>
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} className="input input-bordered join-item" placeholder="Search..."/>
    </div>
  </div>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new</span> 
    <button onClick={handleSearch} className="btn join-item">Search</button>
  </div>
</div>
            {
                toys.map(toy=><ToyCard key={toy._id} toy={toy} />)
            }
            <Footer />
        </div>
    );
};

export default AllToys;