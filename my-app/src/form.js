
import React from 'react';
import axios from 'axios';

  class Login extends React.Component
  {
    
    constructor(props) 
    {
      super(props);
      this.state = { username: '', password: '' }
      this.state={show:true,password:''}
      this.changeusername = this.changeusername.bind(this);
      this.changepassword = this.changepassword.bind(this);
      this.login = this.login.bind(this);
      this.showtext = this.showtext.bind(this);
  }
  changeusername(event) {
      this.setState({ username: event.target.value }) //getting the values and set the values
  }
  changepassword(event) {
      this.setState({ password: event.target.value }) //getting the values and set the values
  }

  showtext(event)
  {
    event.preventDefault();
     this.setState(
       {
         show:!this.state.show 
       }
      ) 
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  login(event) 
  {
    event.preventDefault();

    var userform = document.forms["formlogin"]["user"].value;
    var passform = document.forms["formlogin"]["pass"].value;

    let data = { username: this.state.username, password: this.state.password };

    if(userform =="" || passform =="")
    {
      alert("Enter the field");
    }
    else{
      axios.post("http://localhost:8081/Rest/Con?user="+data.username+"&pass="+data.password).then(res=>{
        
        if(res.status==200)
        {
         alert("sucessfully login");
        }
        else{
            alert("something went wrong");
        }

      }).catch(err=>{
        alert("server error");
       
      })
    }
    
  }
    render()
    {
      return (
        <div>
          <div>
            <h3>Login or Sign-up</h3>
            <form id="formlogin">
                <input type="text" placeholder='Username' name='username' 
                value={this.state.username} onChange={this.changeusername} id="user" required/><br/>

               <input type={this.state.show ? 'password':'text' } placeholder='Password' name='pass'id="password"
                   value={this.state.password} onChange={this.changepassword}  required/><br/>
    
                <input type="submit" value="Login
                " onClick={this.login} />
            </form>
          </div>
        </div>
      );
   }
}
export default Login;
