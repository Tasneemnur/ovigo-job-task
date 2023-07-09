import { useContext, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Community = ({ community }) => {
  const { _id, communityName, communityPicture, admin, adminEmail, adminId } =
    community;
  const { user } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const handleAddtoCart = (community) => {
    setClick(true);
    if (user && user.email) {
      const cart = {
        communityId: _id,
        communityName,
        communityPicture,
        admin,
        adminEmail,
        adminId,
        memberName: user.displayName,
        email: user.email,
        status: "pending",
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "This community added to your cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="flex justify-between px-5 py-5 rounded-md items-center border shadow-md">
      <div className="flex items-center">
        <img src={communityPicture} className="w-16 h-16 rounded me-6" alt="" />
        <div>
          <p className="text-xl font-bold">{communityName}</p>
          <p className="text-lg my-1">{admin}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddtoCart(community)}
        disabled={click}
        className="btn bg-red-600 text-white"
      >
        Join
      </button>
    </div>
  );
};

export default Community;
