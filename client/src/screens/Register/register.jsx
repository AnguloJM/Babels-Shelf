import { useState } from 'react';
import './register.css';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  props.setCurrentPath("register")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    
    <form className="register-form" onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <div className="inner-form-box">
      <h3 id="create-acc-title">Create Account</h3>
        <input
          id="reg-username-box"
          placeholder="Username"
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      <br />
        <input
          id="reg-email-box"
          placeholder="Email Address"
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      <br />
        <input
          id="reg-password-box"
          placeholder="Password"
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      <br />
        <button id="reg-screen-reg-button">Register</button>
      </div>
    </form>
  )
}