import api from '../api/defaultRequest';

import { Link ,useNavigate,useParams} from "react-router-dom";
import { useState ,useEffect} from 'react';

function Signup2() {
    const params = useParams();
    console.log(params.id,"id");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [city, setCity] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [refferedBy, setRefferedBy]= useState('');
    const [userName, setUserName] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      const handleFullNameChange = (event) => {
        setFullName(event.target.value);
      };
      const handleCityChange = (event) => {
        setCity(event.target.value);
      };
      const handlePhoneNoChange = (event) => {
        setPhoneNo(event.target.value);
      };
      const handleRefferedByChange = (event) => {
        setRefferedBy(event.target.value);
      };
      const handleUserNameChange = (event) => {
        setUserName(event.target.value);
      };
 
      const send = (event) =>{
        event.preventDefault();
            if (email === "" || password===""|| fullName===""
            || phoneNo===""||  city===""){
                alert("some input are empty");
                return;
            }
            if (userName=== ""){
                userName = email
            }
            triggerLogin({
                userName,
                email,
                phoneNo,
                fullName,
                refferedBy,
                city,
                Password: password
                });
          }

      const  triggerLogin = async (loginData)=> {

        let res = {
            success : false,
            message: "",
            data : {}
        };
             await api.post("/signup", loginData).then(response => {
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
                //token =res.data.accessToken;
                
                navigate('/login');
              }
            return res;
        }

    return (

        <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">

                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user" onSubmit={send}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user"
                                        value={fullName}
                                        onChange={handleFullNameChange} id="exampleFirstName"
                                            placeholder="Full Name"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user"
                                        value={phoneNo}
                                        onChange={handlePhoneNoChange} id="exampleLastName"
                                            placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" 
                                    value={email}
                                     onChange={handleEmailChange} id="exampleInputEmail"
                                        placeholder="Email Address"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user"
                                        value={params.id}
                                        onChange={handleRefferedByChange}
                                        disabled="true"   id="exampleInputPassword" placeholder="Reffered By"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user"
                                        value={userName}
                                        onChange={handleUserNameChange}
                                            id="exampleRepeatPassword" placeholder="userName"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user"
                                        value={city}
                                        onChange={handleCityChange}
                                            id="exampleInputPassword" placeholder="City"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                        value={password}
                                        onChange={handlePasswordChange}
                                            id="exampleRepeatPassword" placeholder="Password"/>
                                    </div>
                                </div>
                                <button  className="btn btn-primary btn-user btn-block">
                                          Register Account
                                </button>
                                <hr/>
                                <Link to="/login">
                                <a  className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login
                                </a>
                                </Link>
                               
                                
                            </form>
                            <hr/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
     
    );
  }
  export default Signup2;