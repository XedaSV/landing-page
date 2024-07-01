import { useState ,useEffect} from 'react';
import api from '../api/defaultRequest';
import { Link ,useNavigate} from "react-router-dom";
import { format } from 'date-fns';

function DepositUnConfirmTable (){
    const [data, setData] = useState([])
    const token = localStorage.getItem('token');  
    const navigate = useNavigate();
  let  headers = ["Bank","Name","AccountNo","Amount","Date","Confirmed"];
    useEffect(()=>{
        fetchData();
         console.log(data, "ppppp");
      }, []);
     
     const fetchData = async () => {
            console.log( "data here sub");
             await api.get(`/pendingdeposits`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, "plan sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, "pl sb");
                                                                    setData(res.data) ;
                                                                    //console.log(plans, "pl af");
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
                 
 
          const IhavePaid = async (value) => {
            console.log( "i have it here sub");
            console.log(value , "data.deposit._id");
           // setData();
             await api.get(`/deposit/confirm/${value}`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, " sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, " sb");
                                                                   // setplans(res.data) ;
                                                                    //console.log(plans, "pl af");
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

          const send = (event) =>{
            event.preventDefault();
            console.log(event.target.value, "value");
             IhavePaid(event.target.value);
        }
        if(!data){
         return(
                <div className="text-center">loading...</div>
            )
        }else{
    return (

        <div className="card shadow mb-4">
                                          <div className="card-header py-3">
                                              <h6 className="m-0 font-weight-bold text-primary">Pending Plan Subcription</h6>
                                          </div>
                                          <div className="card-body">
                                              <div className="table-responsive">
                                                  <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                      <thead>
                                                          
                                                             {
                                                                <tr>
                                                                {headers.map((item)=>{
                                                                    return(

                                                                        <th>{item}</th>
                                                                    );
                                                                })}
                                                                 </tr>
                                                             
                                                             }
                                                          
                                                      </thead>

                                                      <tbody>
                                                    
                                                    {
                                                        data.map((items)=>{
                                                           return(
                                                            <tr>
                                                                   <td> {items.ominiAcct.bank}</td>
                                                                   <td>{items.ominiAcct.name}</td>
                                                                   <td>{items.ominiAcct.accountNo}</td>
                                                                   <td>{items.deposit.amount}</td>
                                                                   <td>{ format(items.deposit.createdAt, 'MMMM do yyyy, h:mm:ss a')}</td>
                                                                   <td>Not confirmed</td>
                                                                  
                                                          </tr>)
                                                      
                                                        })
                                                    }
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
    )  
}
}
export default DepositUnConfirmTable;