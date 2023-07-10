import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../shared/Title";

const ManageMembers = () => {
  const { user } = useContext(AuthContext);
  const loadedUsers = useLoaderData();
  const activeUser = loadedUsers.find(member => member.email === user.email)
  console.log(activeUser._id)
  const [myCommunities, setMyCommunities] = useState([]);

  useEffect(() => {
    fetch(`https://ovigo-job-task-server.vercel.app/carts?id=${activeUser._id}`)
      .then((res) => res.json())
      .then((data) => setMyCommunities(data));
  }, [activeUser._id]);

  const handleApprove = (community) => {
    fetch(`https://ovigo-job-task-server.vercel.app/carts/approved/${community._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${community.memberName} is now an official member of this community.`,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      });
  }
  return (
    <div>
        <Title heading="Manage Users" subHeading="These are the members who requested to join to your created community. If nothing shows that means no one request to join your created community"></Title>
      <div className="overflow-x-auto">
        <table className="table text-center mt-16">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Community</th>
              <th>Community Name</th>
              <th>Member</th>
              <th>Member's Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myCommunities.map((community, index) => (
              <tr key={community._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={community.communityPicture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{community.communityName}</td>
                <td>{community.memberName}</td>
                <td>{community.email}</td>
                <td>
                  <button onClick={() => handleApprove(community)} className="btn bg-red-600 text-white" disabled={community.status === "approved"}>Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
