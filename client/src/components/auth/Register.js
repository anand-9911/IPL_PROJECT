import React, { useState } from 'react';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password1: '',
  });

  const { name, email, password, password1 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class='form-group'>
          <label>Name</label>
          <input
            type='text'
            class='form-control'
            name='name'
            required
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <label>Email address</label>
          <input
            type='email'
            class='form-control'
            name='email'
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <label>Password</label>
          <input
            type='password'
            class='form-control'
            name='password'
            required
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            class='form-control'
            name='password1'
            required
            value={password1}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
