/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
    const {createUser} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
        createUser(email, password)
        .then((result) => {
            const user = result.user
        //   console.log(user);
          updateProfile(user,{
            displayName: name, photoURL: photo
          })
          .then(()=>{
            console.log('updated successfully')
          })
        })
        .catch((err) => {
          console.log(err.message);
        });
    
  };


  return (
    <div>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="border w-[80%] mt-10 m-auto text-center p-5">
            <p className="text-red-500">{error}</p>
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setURL(e.target.value)}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <button
                onClick={handleRegistration}
                className="btn btn-info w-[75%] p-2 mt-3"
              >
                Register
              </button>
              <p className="p-2">
                <small className="text-info">
                  already have account? <Link to='/login'>login here..</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
