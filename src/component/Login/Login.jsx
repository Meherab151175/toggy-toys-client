import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const { loginUser,user,googleSign  } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

const handleGoogleLogin = () =>{
  googleSign()
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="email p-3 m-2"
              type="email"
              placeholder="enter your email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="password p-3 m-2"
              type="password"
              placeholder="enter your password"
            />
            <button
              onClick={handleLogin}
              className="btn btn-info w-75 p-2 mt-3"
            >
              Login
            </button>
            <label className="label">
              <span className="label-text-alt link link-hover">
                new to be this site? <Link to="/register">register</Link>
              </span>
            </label>
          </form>
          <div>
            <FaGoogle onClick={handleGoogleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
