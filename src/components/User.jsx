import PropTypes from "prop-types";

const User = ({ user: { id, firstName, lastName, age, job } }) => {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{job}</td>
        <td>
          <button className='edit'>Edit</button>
          <button className='del'>Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
