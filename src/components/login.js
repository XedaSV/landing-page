 import api from '../api/defaultRequest';

import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';

function   Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

     let storageKey ="token";
        let  token= "";



            const  triggerLogin = async (loginData)=> {

                let res = {
                    success : false,
                    message: "",
                    data : {}
                };
                     await api.post("/login", loginData).then(response => {
                        console.log(response.data);
                        if (response.data.stackTrace) {
                            res.message = response.data.message;
                            res.success = false;
                        }else{
                            res.data = response.data;
                            res.success = true;
                        }
                        
                        console.log(response.status);
                      })
                      .catch(error => {
                        if (error.response) {
                            console.log(error);
                            console.log(error.response.data);
                            res.message = error.response.data.message;
                            res.success = false;
                          console.log(error.response.status);
                        }
                      });
                    

                      if (res.message) {
                        alert(res.message);
                      }else{
                        console.log(res.data.accessToken);
                        token =res.data.accessToken;
                        localStorage.setItem(storageKey, token);
                        localStorage.setItem("role", res.data.role);
                        navigate('/dashboard');
                      }
                    return res;
                }

            const handleEmailChange = (event) => {
                setEmail(event.target.value);
              };
              const handlePasswordChange = (event) => {
                setPassword(event.target.value);
              };
            
      const send = (event) =>{
        event.preventDefault();
            if (email === "" || password===""){
                alert("some input are empty");
                return;
            }
            triggerLogin({email, password});
          }

  
        
 
    return (

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={send}>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            value={email}
                                                         onChange={handleEmailChange}
                                                            placeholder="Enter Email Address..."/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user"
                                                        value={password}
                                                         onChange={handlePasswordChange}
                                                            id="exampleInputPassword" placeholder="Password"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                            <label className="custom-control-label" for="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    <button  className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </button>
                                                    <hr/>
                                                
                                                </form>
                                                <hr/>
                                                <div className="text-center">
                                                    <Link to="/signup">
                                                    <a className="small" >Create an Account!</a>
                                                    </Link>
                                                    {/* <a className="small" >Forgot Password?</a> */}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
     
    );
  }
  export default Login;