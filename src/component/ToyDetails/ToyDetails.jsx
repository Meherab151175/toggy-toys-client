import { useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";

const ToyDetails = () => {
  const { id } = useParams();

  console.log(id);
  const [toy, setToy] = useState({});

  useEffect(() => {
    fetch(`https://toggy-toys-server.vercel.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);
  // const {quantity,price,sub_category,picture,toy_name,seller_name} = toy
  return (
    <div className="mx-auto flex flex-col min-h-screen">
      {/* <NavBar /> */}
      <div className="flex-grow  card w-[50%] bg-base-100 shadow-2xl mx-auto py-4">
        <figure>
          <img
            src={toy?.picture}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toy?.toyName}
          </h2>
          <div className="flex gap-10">
                <h2 className="border-2 border-slate-900 px-1 text-stone-950">{toy?.seller_name}</h2>
                <h2 className="border-2 border-slate-900 px-1 text-stone-950">{toy?.seller_email}</h2>
          </div>
          <p className="font-semibold py-2">{toy?.description}</p>
          <div className="flex gap-10">
                <h2 className="border-2 p-1">Price : {toy?.price}$</h2>
                <h2 className="border-2 p-1">{toy?.rating}</h2>
                <h2 className="border-2 p-1">Quantity : {toy?.quantity}</h2>
          </div>
        </div>
      </div>
      {/* <Footer className=''></Footer> */}
    </div>
  );
};
export default ToyDetails;
