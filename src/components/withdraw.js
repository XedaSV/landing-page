import {useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import api from '../api/defaultRequest';

function Withdraw () {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [amount, setAmount] = useState('');
  const [balances, setBalances] = useState({})
  const [elegible, setElegible] = useState(0);

    useEffect(()=>{
         fetchplanData();
         console.log(balances, "ppppp");
      }, []);

     const fetchplanData = async () => {
            console.log( "plan here sub");
             await api.get(`/currentuser`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, "acct sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    const {refferalBalance, taskBalance, balance,totalEarnings } = res.data.balance
                                                                    console.log(refferalBalance);
                                                                    console.log(taskBalance);
                                                                    setBalances({  referral : refferalBalance, task:taskBalance, balance: balance, totalEarnings:totalEarnings});
                                                                    console.log(balances, "balance sb");

                                                                    
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
            
             await api.post(`/withdraw`,data ,{  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, " acct");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, " a sb");
                                                                    console.log(data, " af");
                                                                    navigate('/withdrawals');
                                                                   // window.location.reload();
                                                                    return  res.data;
                                                                }
                                                                else {
                                                                    console.log(res.data,"sub rrr");
                                                                }
                                                                return res.data;
                                                            })
                                                            .catch(error => {
                                                                    console.log(error, "sub rrr");
                                                                    alert(error.data);
                                                                    navigate('/login');
                                                            });
                       
                        
          };

          const handleAmountChange = (event) => {
            setAmount(event.target.value);
          };

        const send = (event) =>{
            event.preventDefault();    
            if (amount < balances.balance){
                IhavePaid( {amountTo: amount });
            }else{
                alert(`${amount} entered is greater your balance`);
            }
            
        }
  if(!balances){
    return (
        <div className="text-center">loading...</div>
    )
        }
    else if(balances.balance < elegible){

        return(
            <div className="card shadow mb-4">
            <div className="card-header py-3 ">
                <h6 className="m-0 font-weight-bold text-primary text-uppercase">Account Balance is low</h6>
            </div>
            <div className="card-body">
            <h6 className="m-0 font-weight-bold text-danger shadow p-3 mb-5 bg-body-tertiary rounded">
                 Account Balance is not above the Withdrawing thresshold of 5000 Naira
            </h6>
            <hr/>
            
            </div>
            </div>
        )
    }else{
        console.log(balances , "plll")
        return( 
        
            <div >
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 ">
                                        <h6 className="m-0 font-weight-bold text-primary text-uppercase">Add Withdrawing Account Below</h6>
                                    </div>
                                    <div className="card-body">
                                    <h6 className="m-0 font-weight-bold text-danger shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                                        Click the "Withdraw Button"  below  to withdraw after inputing Amount.
                                    <hr/>
                                    </h6> 
                                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                                    <form className="user" onSubmit={send}>
                                        
                                                    <div className="form-group">
                                                        <input type="number" className="form-control form-control-user"
                                                            
                                                            value={amount}
                                                            onChange={handleAmountChange}
                                                            placeholder="Enter Amount"/>
                                                    </div>
                                                   
                                                    <button  className="btn btn-primary btn-user btn-block">
                                                        withdraw
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
    export default Withdraw;