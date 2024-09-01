import { useDispatch, useSelector } from "react-redux";
import { selectPassword, selectUsername, setPassword, setUsername } from "../features/users/loginSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import { useEffect } from "react";

const Login = () => {

    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useLoaderData();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    const handleLogin = (e) => {
        e.preventDefault();
        
        // perform the login
        authServices.login({ username, password })
            .then(response => {
                alert(response.data.message);

                // clear the form
                dispatch(setUsername(''));
                dispatch(setPassword(''));

                // redirect to the dashboard page
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }

  return (
      <div>
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Username</label>
                                      <input type="email" className="form-control" id="username" 
                                        value={username} onChange={(e) => dispatch(setUsername(e.target.value))}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                      <input type="password" className="form-control" id="password" 
                                        value={password} onChange={(e) => dispatch(setPassword(e.target.value))}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>  
                          </div>
                      </div>
              </div>
      </div>
      </div>
  )
}

export default Login;