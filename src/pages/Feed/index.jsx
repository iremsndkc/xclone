import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../../firebase/index";

const Feed= () => {
  const [user, setUser] = useState();
  useEffect(() => {
    //kullanıcı hesap bilgilerini al ve state'e aktar.
   const unsub = onAuthStateChanged(auth, (user_data) => {
      setUser(user_data);
    });
    //componentWillUnMount tetiklediğinde yani bileşen 
    // ekrandan ayrıldığında kullanıcı oturumunu izlemeyi durdur.
    return () => {
      unsub();
    }
  },[]);
  console.log(user)
  return (
    <div className="feed h-screen bg-black overflow-hidden text-white">
      <Nav user={user} />
      <Main user={user}/>
      <Aside />
    </div>
  )
}

export default Feed;
