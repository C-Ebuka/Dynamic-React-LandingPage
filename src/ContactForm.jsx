import React, { useState } from 'react';

const ContactForm = ({ onCloseForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);

    onCloseForm();

    // Add logic for handling contact form here

    // Optional: Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
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

export default ContactForm;
