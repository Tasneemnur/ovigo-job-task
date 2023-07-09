import { useEffect, useState } from "react";
import Community from "./Community";

const Communities = () => {
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/communities")
    .then((res) => res.json())
    .then((data) => setCommunities(data));
  }, [])
  return (
    <div className="py-20">
      <h1 className="text-center font-bold text-4xl border-b-4 border-t-4 w-[300px] mx-auto py-3 border-red-600">Communities</h1>
      <p className="text-center mt-3">---- Communities that you would like to join ----</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-20">
        {
        communities.map(community => <Community community={community} key={community._id}></Community>)
        }
        </div>
    </div>
  );
};

export default Communities;
