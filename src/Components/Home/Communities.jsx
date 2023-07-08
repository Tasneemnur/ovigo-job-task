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
      <h1 className="text-center text-4xl border-b-2 border-t-2 w-[300px] mx-auto py-3 border-red-600">Communities</h1>
      <div>
        {
        communities.map(community => <Community community={community} key={community._id}></Community>)
        }
        </div>
    </div>
  );
};

export default Communities;
