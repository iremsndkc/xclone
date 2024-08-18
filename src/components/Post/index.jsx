import Button from "./Button";
import Content from "./Content";
import DropDown from "./DropDown";
import UserInfo from "./UserInfo";

const Post = ({tweet}) => {
  return (
    <div className=" flex gap-3 border-b py-6 px-3 border-zinc-600 ">
      <img 
      className="w-12 h-12 rounded-full"
      src={tweet.user.photo} 
      alt={tweet.user.name} />
      <div className="w-full">
        <div className="flex justify-between ">
            <UserInfo tweet={tweet}/>
            <DropDown/>
        </div>
        <Content/>
        <Button/>
      </div>
    </div>
  )
}

export default Post;
