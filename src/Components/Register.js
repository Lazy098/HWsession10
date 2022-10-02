import './Register.css';

const Register = () => {
    return(
        <div className='regis-container'>
            <p>Register</p>
            <input type='text' placeholder='Username...'/>
            <input type='password' placeholder='Password...'/>
            <button>Register</button>
        </div>
    );
};

export default Register;