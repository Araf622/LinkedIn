import logo from './logo.svg';
import './App.css';
import Login  from './Components/Authentication/Login';
import Homepage from './Components/User/Homepage'
import Header from './Components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return(
    <div className='App'>
   
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/Homepage" element = {<Homepage/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Logout" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  )

  // return (
  //   <div className="App">
  //     <Login />
  //   </div>
  // );
}

export default App;
