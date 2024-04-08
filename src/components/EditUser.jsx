import { useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";

const EditUser = () => {
  const location = useLocation();
  const { userId, firstName, lastName, age, job } = location.state;
  const data = {
    userId,
    firstName,
    lastName,
    age,
    job,
  };
  const [user, setUser] = useState(data);

  const handleFormInputs = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='edit'>
      <section>
        <Navbar />
      </section>
      <h1>Edit User</h1>
      <Form data={user} handleInputs={handleFormInputs} />
      <Footer />
    </div>
  );
};

export default EditUser;
