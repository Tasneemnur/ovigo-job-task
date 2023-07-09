import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Title from "../../shared/Title";

const JoinCommunities = () => {
  const { user } = useContext(AuthContext);
  const [joinCommunities, setJoinCommunities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/carts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJoinCommunities(data));
  }, [user?.email]);
  return (
    <div>
        <Title heading="Join Communities" subHeading="These are the communities that you requested to join from the homepage"></Title>
      <div className="overflow-x-auto mt-16">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Community</th>
              <th>Community Name</th>
              <th>Admin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {joinCommunities.map((community, index) => (
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
                <td>
                  {community.communityName}
                </td>
                <td>{community.admin}</td>
                <td>{community.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinCommunities;
