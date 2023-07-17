
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="bg-image">
            <Link to='/' className=' btn btn-primary'>Go to Home</Link>
        </div>
    );
};

export default Error;