import React, { useState } from 'react';

const ValidationForm = ({ onCloseForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no errors, you can submit the form or perform other actions
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform other actions
      console.log('Form submitted successfully:', formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Example validation rules, you can customize these
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div className='btn-cover'>
        <div>
        <button type="submit" className='submit' >Submit</button>
        
        </div>

        <div>
        <button onClick={onCloseForm}>Close</button>
        </div>
      </div>
    </form>
  );
};

export default ValidationForm;
