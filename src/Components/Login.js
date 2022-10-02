import './Login.css';

const Login = () => {
    return(
        <div className='login-container'>
            <p>Login</p>
            <input type='text' placeholder='Username...'/>
            <input type='password' placeholder='Password...'/>
            <button>Login</button>
        </div>
    );
};

export default Login;