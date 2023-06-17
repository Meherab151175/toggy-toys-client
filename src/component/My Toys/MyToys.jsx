import { useContext, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { AuthContext } from "../../provider/AuthProvider";
import Update from "../Update/Update";
import Swal from 'sweetalert2';
import Footer from "../Shared/Footer/Footer";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys,setToys] = useState([])
    const [control,setControl] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentToy, setCurrentToy] = useState(null);

    const openModal = (toy) => {
        setCurrentToy(toy);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    useEffect(()=>{
        fetch(`https://toggy-toys-server.vercel.app/myToys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[user,control])
    
    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'This action cannot be undone!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://toggy-toys-server.vercel.app/toys/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setControl(!control);
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
              })
              .catch((error) => {
                console.error('Error deleting item:', error);
                Swal.fire('Error!', 'An error occurred while deleting the item.', 'error');
              });
          }
        });
      };
      



  
    
  return (
    <div>
        <NavBar />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th></th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys?.map(toy=>(
                <tr key={toy._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy?.toyPic}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                  </div>
                </td>
                <td>
                  {toy?.toyName}
                </td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.price}</td>
                <td>{toy?.rating}</td>
                <td>{toy?.quantity}</td>
                <th>
                  <label onClick={() => openModal(toy)} htmlFor="my_modal_6" className="btn">Open</label>
                  {/* {isModalOpen &&  } */}
                  {/* <Update isModalOpen={isModalOpen} setControl={setControl} control={control}  toy={toy} /> */}

                  {currentToy && (
          <Update
            setControl={setControl}
            control={control}
            toy={currentToy}
            closeModal={closeModal}
          />
        )}
                  
                </th>
                <th>
                  <button
                  onClick={()=>handleDelete(toy?._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            )) }
          </tbody>
          
        </table>


{/* <>
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    


    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</> */}

        
      </div>
      <Footer />
    </div>
  );
};

export default MyToys;
