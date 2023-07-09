import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {/* <Header></Header> */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn bg-red-600 text-white drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content bg-sky-950">
            {user ? (
              <>
                <p className="ms-4 mt-7 mb-12 text-xl font-bold text-white flex items-center">
                  <span className="me-2"></span>
                  <span>
                    Traveller <span className="text-red-600">Dashboard</span>
                  </span>
                </p>
                <li>
                  <Link to="/posts" className="text-white hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/joinCommunities" className="text-white hover:text-white">
                    Join Communities
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageMembers" className="text-white hover:text-white">
                    Manage Members
                  </Link>
                </li>
                
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Dashboard;
