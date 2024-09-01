import { useDispatch, useSelector } from "react-redux";
import { selectName, selectPassword, selectUsername, setName, setPassword, setUsername } from "../features/users/registerSlice";
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const name = useSelector(selectName);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // perform user registration
    authServices.register({ name, username, password }) 
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setName(''));
        dispatch(setUsername(''));
        dispatch(setPassword(''));

        // redirect to login page
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" 
                      value={name}
                      onChange={(e) => dispatch(setName(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Username</label>
                    <input type="email" className="form-control" id="username" 
                      value={username}
                      onChange={(e) => dispatch(setUsername(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" 
                      value={password}
                      onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;