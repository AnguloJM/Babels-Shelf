import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from './screens/HomePage/HomePage';
import Login from './screens/Login/login';
import Register from './screens/Register/register.jsx';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import './App.css';
import Layout from './components/shared/Layout/Layout';
import Dashboard from './screens/Dashboard/Dashboard.jsx';
import BookShelf from './screens/BookShelf/BookShelf';
import MyShelf from './screens/MyShelf/MyShelf';
import AddBooks from './screens/AddBooks/AddBooks';

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
    history.push('/dashboard');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }
  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/bookshelf" component={BookShelf} />
          <Route exact path="/myShelf" component={MyShelf}/>
          <Route exact path="/addBooks" component={AddBooks}/>
          
          <Route exact path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route exact path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route exact path='/'>
          <Dashboard currentUser={currentUser} />
        </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
