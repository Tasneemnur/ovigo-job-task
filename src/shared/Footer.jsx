import { useContext } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-sky-950 mt-16 md:-mx-[107px]">
      <div className="md:mx-20 mx-6">
        <footer className=" text-white py-5">
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-extrabold">Travel</h1>
            </div>
            <div className="py-4 col-span-2">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Lets Connect
              </h5>
              <p className="mb-3">
                Give your email so that we got to know that you are interested
                in this website.
              </p>
              <form>
                <div className="flex">
                  <input
                    className="form-control me-2 px-2"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="email"
                  />
                  <div>
                    <button
                      className="text-orange-600 border-0 btn"
                      type="email"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="py-4">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Explore
              </h5>
              <ul className="menu menu-vertical">
                <li>
                  <Link to="/posts">
                    <a>Home</a>
                  </Link>
                </li>
                {user ? (
                  <li>
                    <Link to="/createCommunity">Create Community</Link>
                  </li>
                ) : (
                  ""
                )}
                {user ? (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div className="py-4">
              <h5 className="text-orange-600 text-xl font-bold mb-4">
                Connect Us
              </h5>
              <p className="mb-2">5/A Dampara, Chittagong</p>
              <p>+88 01795000000</p>
              <p className="mb-2">+88 01900000600</p>
              <p>travel@gmail.com</p>
              <div className="flex space-x-6 mt-5">
                <button>
                  <BsFacebook />
                </button>
                <button>
                  <BsInstagram />
                </button>
                <button>
                  <BsLinkedin />
                </button>
                <button>
                  <BsTwitter />
                </button>
              </div>
            </div>

            
          </div>
          <p className="text-center md:mt-0 mt-3">
            Travel &copy; Copyright 2023
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
