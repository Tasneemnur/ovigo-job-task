import { useEffect, useState } from "react";
import Title from "../../shared/Title";
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
      <Title heading="Communities" subHeading="Communities that you might like to join"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-16">
        {
        communities.map(community => <Community community={community} key={community._id}></Community>)
        }
        </div>
    </div>
  );
};

export default Communities;
