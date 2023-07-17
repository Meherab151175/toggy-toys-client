import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {
    const {quantity,price,sub_category,picture,toy_name,seller_name} = toy
    
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
                      src={picture}
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {toy_name}
            </td>
            <td>
              {seller_name}
            </td>
            <td>
              {sub_category}
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
