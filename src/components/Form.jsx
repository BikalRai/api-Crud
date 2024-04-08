import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Form = ({ data, handleInputs }) => {
  const [error, setError] = useState(false);
  const { userId, firstName, lastName, age, job } = data;
  const navigate = useNavigate();

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(
        `https://661103100640280f219dedb8.mockapi.io/people/v1/users/${id}`,
        {
          firstName,
          lastName,
          age,
          job,
        }
      );
      if (res.status === 200) {
        console.log("Successfully edited");
        navigate(-1);
      }
    } catch (error) {
      console.log("Unable to edit user", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || job === "" || age === 0) {
      setError((prev) => !prev);
    } else {
      handleUpdate(userId);
    }
  };

  return (
    <form method='POST' className='container' onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          placeholder='Enter first name here'
          id='firstName'
          name='firstName'
          onChange={handleInputs}
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
          onChange={handleInputs}
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
          onChange={handleInputs}
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
          onChange={handleInputs}
          value={job}
        />
        <p className='error__msg'>
          {error && job === "" && "Field cannot be empty"}
        </p>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object,
  handleInputs: PropTypes.func,
};

export default Form;
