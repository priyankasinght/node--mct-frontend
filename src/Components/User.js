import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../slice';
import Navbar from './Navbar';
import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const data = await response.json();
      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  const handleStatusChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  const filterUsersByGender = () => {
    switch (value) {
      case '2':
        return users.filter((user) => user.gender === 'male');
      case '3':
        return users.filter((user) => user.gender === 'female');
      default:
        return users;
    }
  };

  return (
    <div className="userContainer">
      <Navbar />
      <h1>User Details</h1>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
      </div>
      <form className="form" method="post" action="/">
        <input
          name="type"
          type="radio"
          value="1"
          onChange={handleStatusChange}
          checked={value === '1'}
        />
        <label htmlFor="all">ALL</label>
        <input
          name="type"
          type="radio"
          value="2"
          onChange={handleStatusChange}
          checked={value === '2'}
        />
        <label htmlFor="male">Male</label>
        <input
          name="type"
          type="radio"
          value="3"
          onChange={handleStatusChange}
          checked={value === '3'}
        />
        <label htmlFor="female">Female</label>
      </form>
      <table>
        <thead>
          <tr className="heading">
            <th className="image">Image</th>
            <th className="name">Name</th>
            <th className="mail">Email</th>
            <th className="gender">Gender</th>
          </tr>
        </thead>
        <tbody>
          {filterUsersByGender().map((user, index) => (
            <tr className="tbl-body" key={index}>
              <td>
                <img alt="loading" src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;

