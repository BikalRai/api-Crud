import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User = ({
  user: { id, firstName, lastName, age, job },
  handleDelete,
}) => {
  const navigate = useNavigate();

  const data = {
    userId: id,
    firstName,
    lastName,
    age,
    job,
  };

  const handleEditUser = () => {
    navigate("/edit", {
      state: data,
    });
  };
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{job}</td>
        <td>
          <button className='edit' onClick={handleEditUser}>
            Edit
          </button>
          <button className='del' onClick={() => handleDelete(id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

User.propTypes = {
  user: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default User;
