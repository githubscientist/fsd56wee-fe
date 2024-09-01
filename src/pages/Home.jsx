const Home = () => {
  return (
      <div>
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="card">
                            <div className="card-header">
                                <h4>Home</h4>
                            </div>
                            <div className="card-body">
                              <p>Welcome to the Review App</p>
                              <p>This is a simple review app that allows users to register, login, and post reviews for the books they have read.</p>

                                <p className="text-muted  small fst-italic">Click on the Register link in the navigation bar to create an account, or click on the Login link to sign in if you already have an account.</p>
                          </div>  
                          </div>
                      </div>
              </div>
          </div>
    </div>
  )
}

export default Home;