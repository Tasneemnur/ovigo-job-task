import { FcLike} from 'react-icons/fc';
const Post = ({ post }) => {
  const { communityName, communityPicture, time, likes, details, postPicture } =
    post;
    
  return (
    <div className="border ">
      <figure>
        <img
          src={postPicture}
          className="w-full h-[340px]"
          alt="picture"
        />
      </figure>
      <div className="">
        <p className="p-4 ">{details.length < 250 ? <p> {details} </p>:
                    <p>{ details.slice(0, 250)} ...</p> }</p>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center"><img src={communityPicture} className="w-8 h-8 rounded me-3"  alt="" />
          <h1 className="text-gray-500 font-semibold">{communityName}</h1></div>
          <p>{time}</p>
          <p className='flex items-center'><span className='me-1'><FcLike></FcLike></span><span>{likes}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Post;
