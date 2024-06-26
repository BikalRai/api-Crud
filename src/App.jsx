import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUSer from "./components/EditUser";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit' element={<EditUSer />} />
      </Routes>
    </div>
  );
}

export default App;
