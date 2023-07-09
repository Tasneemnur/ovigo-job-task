import { useEffect, useState } from "react";
import Title from "../../shared/Title";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://ovigo-job-task-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="px-20 pt-24 pb-5">
        <Title heading="All Posts" subHeading="All the posts of specific communities"></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-14">
        {
            posts.map(post => <Post key={post._id} post={post}></Post>)
        }
    </div>
    </div>
    
  );
};

export default Posts;
