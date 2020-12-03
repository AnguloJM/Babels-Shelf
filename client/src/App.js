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
import EditBook from './screens/EditBook/EditBook';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [currentPath, setCurrentPath] = useState("")
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

  const handlePath = (userPath) => {
    setCurrentPath(userPath)
  }

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
        currentPath={currentPath}
      >
        <Switch>
          <Route exact path="/bookshelf" component={BookShelf} />
          <Route exact path="/addBooks" component={AddBooks} />
          <Route exact path="/editBook/:id/edit" component={EditBook} />
          <Route exact path="/editbook/:id" component={EditBook}/>
          
          <Route exact path='/myShelf'>
            <MyShelf currentUser={currentUser}/>
          </Route>
            
          <Route exact path='/login'>
            <Login handleLogin={handleLogin} setCurrentPath={handlePath}/>
          </Route>

          <Route exact path='/register'>
            <Register handleRegister={handleRegister} setCurrentPath={handlePath} />
          </Route>

          <Route exact path='/dashboard'>
            <Dashboard currentUser={currentUser} />
          </Route>

          <Route exact path='/'>
            <HomePage setCurrentPath={handlePath} />
          </Route>
          
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
