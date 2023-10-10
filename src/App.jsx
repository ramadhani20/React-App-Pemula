import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import Error404 from "./Pages/404";
import Testing from "./Pages/testing";

function App() {
  return ( 
    <div className="flex justify-center min-h-screen items-center">
      <Routes>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element = {<RegisterPage/>}/>
        <Route path="*" element = {<Error404/>}/>
        <Route path="/testing" element = {<Testing/>}/>
      </Routes>
    </div>
  )
}

export default App;

