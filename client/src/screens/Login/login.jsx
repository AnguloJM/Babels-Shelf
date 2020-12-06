import { useState } from 'react';
import './login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  props.setCurrentPath("login")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="login-form" onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <div className="inner-login-form-box">
      <h3 id="login-acc-title">Login</h3>
        <input
          id="login-username-box"
          placeholder="Username"
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      <br />
        <input
          id="login-password-box"
          placeholder="Password"
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      <br />
        <button id="login-screen-login-button">Login</button>
        </div>
    </form>
  )
}
