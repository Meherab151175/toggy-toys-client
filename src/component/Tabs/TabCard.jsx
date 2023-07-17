const TabCard = ({item}) => {
    const {price,seller_name,toy_name,picture} = item
    console.log("item",item)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <p>{price}</p>
        <p>{seller_name}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
