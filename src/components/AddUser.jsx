import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: null,
    job: "",
  });
  const navigate = useNavigate();

  const { firstName, lastName, age, job } = user;

  const handleFormInputs = (e) => {
    const { value, name } = e.target;
  };

  return (
    <div className='add'>
      <section className='container'>
        <Link onClick={() => navigate(-1)}>Go Back</Link>
        <h1>Add user</h1>
      </section>
      <form action='' method='POST' className='container'>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            placeholder='Enter first name here'
            id='firstName'
            name='firstName'
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            placeholder='Enter last name here'
            id='lastName'
            name='lastName'
            value={lastName}
          />
        </div>
        <div>
          <label htmlFor='age'>Age: </label>
          <input
            type='number'
            placeholder='Enter age here'
            id='age'
            name='age'
            value={age}
          />
        </div>
        <div>
          <label htmlFor='job'>Job: </label>
          <input
            type='text'
            placeholder='Enter job here'
            id='job'
            name='job'
            value={job}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddUser;
