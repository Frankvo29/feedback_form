import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    feedback:"",
    rating:""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name:"",
        email:"",
        feedback:"",
        rating:""
      });
      alert("Thank you for your valuable feedback!");
    }
  };

  return (
    <>
    <nav>Tell Us What You Think</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your feedback"
          value={formData.feedback}
          onChange={handleChange}>
        </textarea>
        <div>
          <p><input
            type="radio"
            name="rating"
            value="1"
            onChange={handleChange}
          />&nbsp; 1</p>

          <p><input
            type="radio"
            name="rating"
            value="2"
            onChange={handleChange}
          />&nbsp; 2</p>
          
          <p><input
            type="radio"
            name="rating"
            value="3"
            onChange={handleChange}
          />&nbsp; 3</p>

          <p><input
            type="radio"
            name="rating"
            value="4"
            onChange={handleChange}
          />&nbsp; 4</p>
          
          <p><input
            type="radio"
            name="rating"
            value="5"
            onChange={handleChange}
          />&nbsp; 5</p>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
