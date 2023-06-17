import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {
    const {quantity,price,subCategory,toyPic,toyName,sellerName} = toy
    
  return (
    <div className="">
      <table className="table container mx-auto">
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={toyPic}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {toyName}
            </td>
            <td>
              {sellerName}
            </td>
            <td>
              {subCategory}
            </td>
            <td>
              {quantity}
            </td>
            <td>Price:{price} $</td>
            <th>
              <Link to={`/details/${toy?._id}`} className="btn btn-ghost btn-xs">Viev Details</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToyCard;
