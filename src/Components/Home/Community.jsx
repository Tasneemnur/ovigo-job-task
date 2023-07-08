import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Community = ({ community }) => {
  const { _id, communityName, communityPicture, admin, adminEmail } = community;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleAddtoCart = (community) => {
   if(user && user.email){
    const cart = {
        communityId: _id,
        communityName,
        communityPicture,
        admin,
        adminEmail,
        email: user.email,
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
          setClick(true)
        });
    } else {
      Swal.fire({
        title: "You have to login first",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/", { state: { from: location } });
        }
      });
    }
   }
   

  return (
    <div className="flex w-1/2 mx-auto justify-between px-5 py-5 my-5 rounded-md items-center border shadow-md">
      <div className="flex items-center">
      <img src={communityPicture} className="w-16 h-16 rounded me-6" alt="" />
      <div>
      <p className="text-xl font-bold">{communityName}</p>
      <p className="text-lg my-1">{admin}</p>
      </div>
      </div>
      <button onClick={() => handleAddtoCart(community)} disabled={click} className="btn">Join</button>
    </div>
  );
};

export default Community;
