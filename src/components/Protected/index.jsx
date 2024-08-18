import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

const Protected = () => {
    //yetkisi var mı state i.
    const [isAuth, setIsAuth] = useState();
    //kullanıcının oturum verilerini al.
    useEffect(() => {
        // bu method kullanıcı oturumunu izler.
        onAuthStateChanged(auth, (user) => {
            setIsAuth(user ? true : false);
        });
    }, []);

    const navigate = useNavigate();

    //eğer kullanıcının oturumu kapalıysa logine yönlendir.
    if (isAuth === false) {
        return <Navigate to={"/"} replace />;
    }
    //oturum açıksa alt route'nin bileşenini ekrana bas.
  return (
    <Outlet/>
  )
};

export default Protected;

//!NOT
// navigate bileşeni
//bir bileşenin return satırında yönlendrime yapmamız gerekiyorsa
//useNvigate kullanıldığında hata  erdiği için bu tarz return 
//yönlendirmelerinde Navigate bileşenini kullanırız.
