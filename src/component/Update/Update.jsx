const Update = ({ toy, control, setControl, isModalOpen,closeModal }) => {
  console.log(toy);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const toy_name = form.toyname.value;
    const photo = form.photo.value;
    const sub_category = form.subCategory.value;
    const price = form.price?.value;
    const rating = form.rating?.value;
    const quantity = form.quantity?.value;
    const desc = form.desc?.value;
    const _id = form.id?.value;

    const data = {
      picture: photo,
      toy_name,
      price,
      rating,
      sub_category,
      quantity,
      description: desc,
      _id,
    };
    console.log(data);
    fetch(`http://localhost:5000/update/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          form.reset();
        }
        console.log(result);
      });
  };

  return (
    <div>
      {/* {isModalOpen &&  */}
      <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <form
              onSubmit={handleSubmit}
              className="card flex-shrink-0 w-full shadow-2xl bg-base-100"
            >
              <div className="card-body grid grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photoURL"
                    name="photo"
                    defaultValue={toy?.picture}
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
                    name="toyname"
                    defaultValue={toy?.toy_name}
                    className="input input-bordered"
                  />
                </div>
                <input
                  type="text"
                  placeholder="toy name"
                  name="id"
                  defaultValue={toy?._id}
                  className="input input-bordered "
                />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Category</span>
                  </label>
                  <input
                    type="text"
                    placeholder="sub category"
                    name="subCategory"
                    defaultValue={toy?.sub_category}
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
                    name="price"
                    defaultValue={toy?.price}
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
                    name="rating"
                    defaultValue={toy?.rating}
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
                    name="quantity"
                    defaultValue={toy?.quantity}
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
                    name="desc"
                    defaultValue={toy?.description}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>

            <div className="modal-action">
              <label htmlFor="my_modal_6" 
               className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Update;
