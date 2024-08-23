import { useEffect, useState } from "react"
import Form from "../../components/Form"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

const Main = ({user}) => {
  const [tweets, setTweets] = useState();
  useEffect(() => {
    const tweetCollection = collection(db, 'tweets')
    const options = query(tweetCollection,orderBy('createdAt','desc'))
    const unsub = onSnapshot(options, (snapshot) => {
      const tempTweets = []
      snapshot.forEach((doc) => tempTweets.push({ id: doc.id, ...doc.data() }))
      setTweets(tempTweets)
      return() => unsub()
    })
  }, [])
  
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
