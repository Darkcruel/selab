import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactDom from 'react-dom';

import 'react-viewer/dist/index.css';
import './homeimage.scss';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '',pw:''};

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleIDChange(event) {
    this.setState({id: event.target.value});
  }
  handlePWChange(event) {
    this.setState({pw: event.target.value});
  }
  loginSubmit= async() => {
    const res = await axios.get('/api/host');
    this.setState({isLoggedin : res.data.isLoggedin});
  }

    render() {
      return (
        <div className="home">
            <img src={require("./selab_logo2.png")} alt="logo" />
          {!this.props.isLoggedin && <div className="login">
            <form onSubmit={this.loginSubmit}>
            <label>
              <span className="loginFont">ID</span><br/>
              <input type="text" name="id" value={this.state.id} onChange={this.handleIDChange} />
            </label> 
            <br/>
            <label>
              <span className="loginFont">Password</span><br/>
              <input type="password" name="pw" value={this.state.pw} onChange={this.handlePWChange} />
            </label>
            <br/>
              <input type="submit" value="Login" />
            </form>
          
         </div>}

         {this.props.isLoggedin &&
         <div>로그인됨.</div>}
          

        </div>
        
        
      );
    }
  }

export default Home;