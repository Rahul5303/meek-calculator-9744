

import './App.css';

import { Navbar } from "./components/Navbar";

//import { AllRoutes } from './components/allRoutes';
import {useDispatch, useSelector} from "react-redux"
import AllRoutes from './Routes/AllRoutes';

function App() {

  const status = useSelector((store)=>{
    return store.isLogin.isLogin
  })

 // console.log(status)

  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
     
  
     
      
   
    </div>
  );
}

export default App;

