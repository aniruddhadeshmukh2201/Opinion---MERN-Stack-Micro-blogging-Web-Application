import React, { Component } from "react";
import PropTypes from "prop-types";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      signUp,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    value={username}
                  />
                  <label htmlFor="image-url">Image URL</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;


// import React, { Component } from 'react';
// // import {setAuthorizationToken, setCurrentUser} from "../store/actions/auth.js";
// // import {addError} from "../store/actions/errors";
// const axios = require("axios");

// class AuthForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             email:"",
//             username: "",
//             password: "",
//             // profileImageUrl: ""
//             profileImageUrl: null
//         };
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const authType = this.props.signUp ? "signup" : "signin";
//         const formData = new FormData();
//         formData.append('profileImageUrl',this.state.profileImageUrl);
//         formData.append('username',this.state.username);
//         formData.append('password',this.state.password);
//         formData.append('email',this.state.email);
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         // axios.post(`/api/auth/${authType}`,formData,config)
//         axios.post(`/api/auth/${authType}`,this.state,config)
//             .then((response) => {
//                 console.log("LOGGED IN!");
//                 this.props.history.push('/');
//                 // alert("The file is successfully uploaded");
//             }).catch((error) => {
//         });
//         // this.props.onAuth(authType, this.state, config)
//         // .then(() => {
//         //     console.log("LOGGED IN!");
//         // })
//         // .catch(() => {
//         //     return;
//         // });
        
//     };

//     render() { 
//         const { email, username,  profileImageUrl} = this.state;
//         const { 
//             heading,
//             buttonText,
//             signUp,
//             errors,
//             history,
//             removeError
//         } = this.props;

//         history.listen(()=> {
//             removeError();
//         })

//         return ( 
//             <div>
//                 <div className="row justify-content-md-center text-center">
//                     <div className="col-md-6">
//                         <form onSubmit={this.handleSubmit}>
//                             <h2>{ heading }</h2>
//                             { errors.message && <div className="alert alert-danger"> {errors.message}</div> }
//                             <label htmlFor="email">Email:</label>
//                             <input 
//                                 className="form-control" 
//                                 id="email" 
//                                 name="email"
//                                 onChange={this.handleChange} 
//                                 value={email} 
//                                 type="text" 
//                             />
//                             <label htmlFor="password">Password:</label>
//                             <input 
//                                 className="form-control" 
//                                 id="password" 
//                                 name="password"
//                                 onChange={this.handleChange} 
//                                 type="password" 
//                             />
//                             {signUp && (
//                                 <div>
//                                     <label htmlFor="username">Username:</label>
//                                     <input 
//                                         className="form-control" 
//                                         id="username" 
//                                         name="username"
//                                         onChange={this.handleChange} 
//                                         value={username} 
//                                         type="text" 
//                                     />
//                                     <label htmlFor="image-url">Image Url:</label>
//                                     <input 
//                                         className="form-control" 
//                                         id="image-url" 
//                                         name="profileImageUrl"
//                                         onChange={this.handleChange} 
//                                         value={profileImageUrl}
//                                         type="text" 
//                                     />
//                                 </div>
//                             )}
//                             <button type="submit" className="btn btn-primary btn-black btn-lg">
//                                 {buttonText}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default AuthForm;
