import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from './screens/HomePage/HomePage';
import Login from './screens/Login/login';
import Register from './screens/Register/register.jsx';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import './App.css';
import Layout from './components/shared/Layout/Layout';
import Dashboard from './screens/Dashboard/Dashboard.jsx';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/dashboard');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }
  return (
    <div className="App">
      {/* <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      > */}
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
          
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>

        </Switch>
      {/* </Layout> */}
    </div>
  );
}

export default App;
