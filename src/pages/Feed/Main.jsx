import { useEffect, useState } from "react"
import Form from "../../components/Form"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

const Main = ({user}) => {
  const [tweets, setTweets] = useState();
  useEffect(() => {
    //verileri alınacak koleksiyonunun referansını al.
   const ref = collection(db, "tweets");

   // sorgu ayalrını yap.
   const q = query(ref, orderBy("createdAt", "desc"));

   //koleksiyona abone ol.
    const unsub = onSnapshot(q, (snapShot) => {
    //tweetlerin geçici olarak tutulacağı diiz.
    const temp = [];
    // dökümanların içerisindeki veriye erişip geçici diziye aktarıyoruz.
    snapShot.docs.forEach((doc) => temp.push(doc.data()));
    // state'i güncelle.
    setTweets(temp);
   });
   //bileşen ekrandan ayrıldığında aboneliği durdur.
   return() => unsub();
  }, []);
  return (
    <div className='border border-zinc-600 overflow-y-auto'>
      <header className="border-b border-zinc-600 p-4 font-bold">Anasayfa</header>
      <Form user={user}/>

      {!tweets ?(
        <div className="flex justify-center my-20 scale-[1.5]">
          <Loader/>
        </div>  ):(
           tweets.map((tweet) => <Post tweet={tweet} key={tweet.id}/>)
          )}
    </div>
  );
};

export default Main
