import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const Registration = () => {
  const {createUser} = useContext(AuthContext)
  // const navigate = useNavigate();

  const handleCreateUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      return Swal.fire({
        icon: 'error',
        title: 'Password must be at least 6 characters long'
      })
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        form.reset();
        sendVerificationEmail(registerUser);
        updateUserData(registerUser, name, photo);
      })
      .catch((error) => {
        console.error(error);
      });

      const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
        .then(() => {
          Swal.fire('Please verify your email address')
        });
      }
    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          const registerUser = { name, email, photo, phone }
                        fetch('https://ovigo-job-task-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(registerUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                              if (data.insertedId) {
                                  form.reset();
                                  Swal.fire({
                                      position: 'center',
                                      icon: 'success',
                                      title: 'User created successfully.',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  // navigate('/posts');
                              }
                          })
        })
        .catch((error) => {
         console.log(error)
        });
    };
  }
  return (
    <div className="hero my-12">
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleCreateUser}>
            <h1 className="text-5xl font-bold text-center mb-4">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                className="input input-bordered"
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
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm mt-2">
            Already have an account? Please{" "}
            <Link to="/" className="text-primary underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
