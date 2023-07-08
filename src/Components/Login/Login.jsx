import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { login, } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/posts";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
      .then((res) => {
        const loggedUser = res.user;
        if (loggedUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          return Swal.fire({
            icon: "error",
            title: "Wrong Password",
          });
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          return Swal.fire({
            icon: "error",
            title: "Wrong Email",
          });
        }
      });
        
    }
  return (
    <div className="md:mx-20 my-20">
    <div className="hero mt-10 mb-5">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
          <form onSubmit={handleLogin}>
          <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold">Login</button>
            </div>
            </form>
            <p className="text-sm mt-2">New to this Website? Please <Link to="/register" className="text-primary underline">Register</Link></p>
          </div> 
        </div>
      </div>
      </div>
  );
};

export default Login;
