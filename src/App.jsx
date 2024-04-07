import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
