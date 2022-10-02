import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import About from './Components/About';
import Cart from './Components/Cart';
import Profile from './Components/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/Products' element={<Products />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/Profile' element={<Profile />}/>
      <Route path='/Auth' element={<Auth />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
    </Routes>
  );
}

export default App;
