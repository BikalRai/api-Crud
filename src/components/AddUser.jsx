import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  job: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { firstName, lastName, age, job } = user;

  const handleFormInputs = (e) => {
    const { value, name } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePost = async () => {
    try {
      const res = await axios.post(
        "https://661103100640280f219dedb8.mockapi.io/people/v1/users",
        {
          firstName,
          lastName,
          age,
          job,
        }
      );
      if (res.status === 201) {
        console.log("Successfully added to database");
        setUser(initialState);
      }
    } catch (error) {
      console.log("Unable to post to database", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || job === "" || age === 0) {
      setError((prev) => !prev);
    } else {
      handlePost();
    }
  };

  return (
    <div className='add'>
      <section className='container'>
        <Link onClick={() => navigate(-1)}>Go Back</Link>
        <h1>Add user</h1>
      </section>
      <form method='POST' className='container'>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            placeholder='Enter first name here'
            id='firstName'
            name='firstName'
            onChange={handleFormInputs}
            value={firstName}
          />
          <p className='error__msg'>
            {error && firstName && "Field cannot be empty"}
          </p>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            placeholder='Enter last name here'
            id='lastName'
            name='lastName'
            onChange={handleFormInputs}
            value={lastName}
          />
          <p className='error__msg'>
            {error && lastName === "" && "Field cannot be empty"}
          </p>
        </div>
        <div>
          <label htmlFor='age'>Age: </label>
          <input
            type='number'
            placeholder='Enter age here'
            id='age'
            name='age'
            onChange={handleFormInputs}
            value={age}
          />
          <p className='error__msg'>
            {error && age === 0 && "Age cannot be zero or empty"}
          </p>
        </div>
        <div>
          <label htmlFor='job'>Job: </label>
          <input
            type='text'
            placeholder='Enter job here'
            id='job'
            name='job'
            onChange={handleFormInputs}
            value={job}
          />
          <p className='error__msg'>
            {error && job === "" && "Field cannot be empty"}
          </p>
        </div>
        <button type='submit' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddUser;
