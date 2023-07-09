import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../shared/Navbar";
import { useLoaderData } from "react-router-dom";

const CreateCommunity = () => {
  const { user } = useContext(AuthContext);
  const loadedUsers = useLoaderData();
  const activeUser = loadedUsers.find(member => member.email === user.email)
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const communityName = form.communityName.value;
    const communityPicture = form.photo.value;
    const admin = form.adminName.value;
    const adminEmail = form.adminEmail.value;
    
    const community = {
      communityName, communityPicture, admin, adminEmail, adminId:activeUser._id
    };
    console.log(community);
    fetch(
      "http://localhost:5000/communities",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(community),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "Community Created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };
  return (
<div>
<Navbar></Navbar>
<div className="py-32">
      <h1 className="text-3xl w-96 text-center mx-auto font-bold mb-14 border-b-2 border-t-2 py-4">
        Create <span className="text-red-600">Community</span>
      </h1>
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Community Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="communityName"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Community Picture</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Admin Name</span>
            </label>
            <input
              type="text"
              placeholder="Admin name"
              name="adminName"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Admin Email</span>
            </label>
            <input
              type="email"
              placeholder="admin email"
              name="adminEmail"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control mt-6 w-full col-span-2">
            <input
              className="btn bg-red-600 border-none hover:bg-red-700 text-white"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
</div>
    
  );
};

export default CreateCommunity;
