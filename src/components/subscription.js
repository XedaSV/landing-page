import {useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import api from '../api/defaultRequest';

function Subscribe (props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
  const [plans, setplans] = useState();
    
    const id = props.id
    console.log(id,"id__");
    useEffect(()=>{
         fetchplanData();
         console.log(plans, "ppppp");
      }, []);

     const fetchplanData = async () => {
            console.log( "plan here sub");
             await api.get(`/plans/sub/${id}`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, "plan sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, "pl sb");
                                                                    setplans(res.data) ;
                                                                    console.log(plans, "pl af");
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
                 
 
          const IhavePaid = async () => {
            console.log( "plan here sub");
            setplans();
             await api.get(`/deposit/confirm/${plans.depositId}`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, " sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, " sb");
                                                                   // setplans(res.data) ;
                                                                    console.log(plans, "pl af");
                                                                    navigate('/sub-request');
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

        const send = (event) =>{
            event.preventDefault();    
             IhavePaid();
        }
    
    if(!plans){

        return(
            <div className="text-center">loading...</div>
        )
    }else{
        console.log(plans , "plll")
        return( 
        
            <div >
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 ">
                                        <h6 className="m-0 font-weight-bold text-primary text-uppercase">Pay to the Account Below</h6>
                                    </div>
                                    <div className="card-body">
                                    <h6 className="m-0 font-weight-bold text-danger shadow p-3 mb-5 bg-body-tertiary rounded">
                                        Click the "I have paid Button"  below   Only when payment has been paid to avoid account been disabled.
                                    <hr/>
                                    </h6> 
                                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                                        <p className ="m-0 font-weight-bold " >Bank :  {plans.Acct.bank}  bank </p>
                                        <hr/>
                                        <p className ="m-0 font-weight-bold text-primary">Account Name : { plans.Acct.name}  
                                          </p>
                                        <hr/>
                                        <p className ="m-0 font-weight-bold text-primary">Account No : { plans.Acct.accountNo}  
                                         </p>
                                        </div>
                                       
                                            <button className="btn btn-facebook btn-block"
                                             onClick={send}
                                              >
    
                                            <i className="fab fa-facebook-f fa-fw"></i> I have Paid
                                            </button>
                                        
    
                                    </div>
                                </div>
                            </div>
        )
    }
       
    
    }
    export default Subscribe;