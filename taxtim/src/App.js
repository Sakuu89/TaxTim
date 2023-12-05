import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './Pages/Footer';
import Navbar from './Pages/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { auth } from './Firebase';


function App() {
  const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
              console.log(user);
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, [])
  return (
    <div className="App" style={{width:'100%'}}>
      <Navbar logout={true} userName={userName} />
     <AllRoutes />
     <Footer/>
    </div>
  );
}

export default App;
