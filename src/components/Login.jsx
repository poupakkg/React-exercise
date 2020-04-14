import React, { Component } from 'react';
   
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email:'',
      isLoggedIn: Boolean,
      greeting: 'Welcome Back Peggy!',
      error: ' username or password is not matched',
    }

  };
  
// Create log in - log out button change in one button - not operator by reversing boolean value
// function Login (props)
// {
//   return (
//     <button onClick = {props.onClick}> Login </button>
//     );
// }

// function Logout (props)
// {
//   return (
//     <button onClick = {props.onClick}> Logout </button>
//   );
// }
  
//   handleLoginClick ()
//   {
//     this.state ({isLoggedIn:true});
//   }

//   handleLogoutClick ()
//   {
//     this.state ({isLoggedIn:false});
//   }

    render() {
      return (
        <div className="Login">

          <form onSubmit>
           
            <label>User Name</label>
            <input type="text" name="username" value={this.state.username} /> 
  
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} />
  
            <button type="submit">Login</button>
          </form>  

        </div>
         );
    }
  }

  // Create greeting message when the user can log in and error message if username/password is wrong

// function Greeting (props)
// {
//   const isLoggedIn = props.isLoggedIn;
 

//  if (isLoggedIn)
//  {
//    return <Greeting />
//  }

// else 
// {
//   return <Greeting />
// }
// }