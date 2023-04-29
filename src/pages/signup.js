
/* This is the "Sign up" page of my web application that allowes user to enter their email and passsword and it takes them to the profile when they press log in */


import React from 'react';
import "./signup.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission
    window.location.href = "http://localhost:3000/sign-up#"; 
  }
  

  render() {
    return (
      <div>
        <header>
         
        </header>
        <main className="center">
          <h1>Welcome to Marketplace Connects</h1>
          <br /><br />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required  style={{  padding: "5px", borderRadius: "5px", border: "1px solid #ccc"}}/>
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required style={{  padding: "5px", borderRadius: "5px", border: "1px solid #ccc"}}/>
            <br /><br />
  
            <div class="login-button">
  <form action="http://localhost:3000/profile">
    <input type="submit" value="Log In" style={{backgroundColor: "#5d44a8", color: "#fff", border: "1px solid #ccc", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s", marginLeft: "45px"}}/>
  </form>
</div>

  
          </form>
          <div>
          <br /><br />
             <a href="#">Don't have an account?</a>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <a href="#">Forgot your password?</a>
             <br /><br />
          </div>
        </main>
        <footer>
         
        <div class="copyright">
    &copy; 2023 Marketplace Connect

          </div>
        </footer>
       
      </div>
  
    );
  }
  
}

export default SignUp;
