import { NavLink } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
    return(
        <div className='header'>
            <h1>Login or Register ?</h1>
            <button className='btn'>
            <NavLink to='/login'>Login</NavLink>
            </button>
            <button className='btn'>
            <NavLink to='/Register'>Register</NavLink>
            </button>
        </div>
    );
};
export default Auth;