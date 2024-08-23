import { LuMessageCircle } from "react-icons/lu";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Button = ({tweet}) => {
  // oturum açık olan kullanıcı bu tweeti likeladı mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // like butonuna tıklanınca:
  const toggleLike = async () => {
    // güncellneecek dökümanın referansını al.
    const tweetRef = doc(db, "tweets", tweet.id);

    // kullanıcı likeladıysa
    // user idsini likes dizisinden kaldır
    //likeladıysa user idsini likes dizisine ekle.
    await updateDoc(tweetRef, {
      likes: isLiked 
      
      ? arrayRemove(auth.currentUser.uid) 
      
      : arrayUnion(auth.currentUser.uid),
    });
  };

  
  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#77a9f934]">
        <LuMessageCircle />
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#9ff59f3b]">
        <FaRetweet />
      </div>
      <div 
        onClick={toggleLike} 
        className="p-3 rounded-full cursor-pointer transition 
        hover:bg-[#ffc0cb48] flex items-center gap-2">
        {isLiked ? <FaHeart className="text-red-500"/> : <FaRegHeart />}
        {tweet.likes.length}
      </div>
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#80808053]">
        <CiShare2 />
      </div>
    </div>
  )
}

export default Button
