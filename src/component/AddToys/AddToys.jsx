import { useContext } from "react";
import { AuthContext } from './../../provider/AuthProvider';
import NavBar from "../Shared/NavBar/NavBar";


const AddToys = () => {
    const {user} = useContext(AuthContext)
    
    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyname.value;
        const photo = form.photo.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const desc = form.desc.value;
        const sellerName =user?.displayName;
        const sellerEmail =user?.email;

        const toy = {
            toyPic:photo,
            toyName,
            price,
            rating,
            sellerName,
            sellerEmail,
            subCategory,
            quantity,
            description:desc,
        }

        fetch('https://toggy-toys-server.vercel.app/addToys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toy)
        })
        .then(res =>res.json())
        .then(data=>console.log(data))
        console.log(toy)
    }
    
    return (
        <>
        <NavBar />
        <div className="hero min-h-screen bg-base-200">
        <div className=" flex-col lg:flex-row-reverse">
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h1 className="text-center pt-6 text-3xl font-bold">Add a Toys</h1>
            <div className="card-body grid grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="toy name"
                  name='toyname'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                    placeholder="sub category"   
                    name='subCategory'               
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name='price'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  name='rating'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantiy</span>
                </label>
                <input
                  type="text"
                  placeholder="quantity"
                  name='quantity'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  name='desc'
                  className="input input-bordered"
                />
              </div>
            </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" type="submit" value='Post Toys' />
              </div>
          </form>
        </div>
      </div>
      </>
    );
};

export default AddToys;