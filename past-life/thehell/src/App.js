import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Myprofile from "./component/Myprofile";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Createpost from "./component/Createpost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/myprofile" element={<Myprofile />}></Route>
          <Route path="/createPost" element={<Createpost />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
