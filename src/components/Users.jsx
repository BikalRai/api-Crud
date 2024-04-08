import axios from "axios";
import Navbar from "./navbar/Navbar";
import { useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Users = () => {
  const [users, setUsers] = useState([]);

  const usersStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const getUsers = async () => {
    const res = await axios.get(
      "https://661103100640280f219dedb8.mockapi.io/people/v1/users"
    );
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://661103100640280f219dedb8.mockapi.io/people/v1/users/${id}`
      );
      if (res) {
        console.log(`Successfully deleted with id ${id}`);
        // setUsers((prev) => prev.filter((user) => user.id !== id));
        getUsers();
      }
    } catch (error) {
      console.log("Could not delete", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='users'>
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='users__heading container' style={usersStyles}>
        <h1>Users</h1>
        <Link
          to='/add'
          style={{
            marginLeft: "auto",
            padding: "1rem 2rem",
            border: "none",
            fontWeight: "bold",
            backgroundColor: "rgb(118, 171, 174)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add
        </Link>
      </section>
      <table className='container'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>
        {users.map((user) => (
          <User key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </table>
      <Footer />
    </div>
  );
};

export default Users;
