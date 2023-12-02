import './App.css';
import { Footer } from './Pages/Footer';
import Navbar from './Pages/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <Navbar />
      
     <AllRoutes />
     <Footer/>
    </div>
  );
}

export default App;
