import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/:userId' element={<Post/>}></Route>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
