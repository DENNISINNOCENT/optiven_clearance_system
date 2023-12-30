import { Route,Routes } from "react-router-dom";
import Admindashboard from "./dashboard/Admindashboard";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path ="/admin" element ={<Admindashboard/>}/>
        <Route path="/sidebar" element ={<Sidebar/>}/>
        </Routes>
        
     

     
    </div>
  );
}

export default App;
