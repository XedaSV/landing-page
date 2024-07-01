import {useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import api from '../api/defaultRequest';

function AddAccount () {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [acct, setAcct] = useState();
  const [bank, setBank] = useState('');
  const [name, setName] = useState('');
  const [acctNo, setAcctNo] = useState('');
    
    
    useEffect(()=>{
         fetchplanData();
         console.log(acct, "ppppp");
      }, []);

     const fetchplanData = async () => {
            console.log( "plan here sub");
             await api.get(`/account`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, "acct sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, "acct sb");
                                                                    setAcct(res.data.deposits) ;
                                                                    console.log(acct, "acct af");
                                                                    return  res.data;
                                                                }
                                                                else {
                                                                    console.log(res.data,"rrr");
                                                                }
                                                                return res.data;
                                                            })
                                                            .catch(error => {
                                                                    console.log(error, "rrr");
                                                                    navigate('/login');
                                                            });
                       
                        
          };
                 
 
          const IhavePaid = async (data) => {
            console.log( data ,"I HP Data here sub");
            
             await api.post(`/account`,data ,{  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, " acct");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, " a sb");
                                                                    console.log(data, " af");
                                                                    //navigate('/sub-request');
                                                                    window.location.reload();
                                                                    return  res.data;
                                                                }
                                                                else {
                                                                    console.log(res.data,"sub rrr");
                                                                }
                                                                return res.data;
                                                            })
                                                            .catch(error => {
                                                                    console.log(error, "sub rrr");
                                                                    navigate('/login');
                                                            });
                       
                        
          };

          const handleEmailChange = (event) => {
            setBank(event.target.value);
          };
          const handleNameChange = (event) => {
           setName(event.target.value);
          };
          const handlePasswordChange = (event) => {
            setAcctNo(event.target.value);
          };

        const send = (event) =>{
            event.preventDefault();    
             IhavePaid( {name: name,accountNo: acctNo, bank: bank });
        }
  if(!acct){
    return (
        <div>
        <div class="preloader">
           <img src="assets/img/tenor.gif" alt=""/>
        </div>
      {/* <div className="text-center">loading...</div> */}
     </div>
    )
        }
    else if(acct.length){

        return(
            <div className="card shadow mb-4">
            <div className="card-header py-3 ">
                <h6 className="m-0 font-weight-bold text-primary text-uppercase">Add Withdrawing Account Below</h6>
            </div>
            <div className="card-body">
            <h6 className="m-0 font-weight-bold text-danger shadow p-3 mb-5 bg-body-tertiary rounded">
                 Account added already.
            </h6>
            <hr/>
            
            </div>
            </div>
        )
    }else{
        console.log(acct , "plll")
        return( 
        
            <div >
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 ">
                                        <h6 className="m-0 font-weight-bold text-primary text-uppercase">Add Withdrawing Account Below</h6>
                                    </div>
                                    <div className="card-body">
                                    <h6 className="m-0 font-weight-bold text-danger shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                                        Click the "Add Button"  below  to add account after inputing details.
                                    <hr/>
                                    </h6> 
                                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                                    <form className="user" onSubmit={send}>
                                        
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user"
                                                            
                                                            value={bank}
                                                            onChange={handleEmailChange}
                                                            placeholder="Bank Name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user"
                                                            
                                                            value={name}
                                                            onChange={handleNameChange}
                                                            placeholder="Fullname "/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user"
                                                        value={acctNo}
                                                         onChange={handlePasswordChange}
                                                             placeholder="Account Number"/>
                                                    </div>
                                                    
                                                    <button  className="btn btn-primary btn-user btn-block">
                                                        Add
                                                    </button>
                                                    <hr/>
                                                
                                                </form>
                                        </div>
                                       
    
                                    </div>
                                </div>
                            </div>
        )
    }
       
    
    }
    export default AddAccount;