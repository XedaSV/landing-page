import { useState ,useEffect} from 'react';
import api from '../api/defaultRequest';
import { Link ,useNavigate} from "react-router-dom";
import { format } from 'date-fns';

function WithdrawalUnconfirmTable (){
    const [data, setData] = useState([])
    const token = localStorage.getItem('token');  
    const navigate = useNavigate();
  let  headers = ["Action","Amount","Date","Status"];
    useEffect(()=>{
        fetchData();
         console.log(data, "ppppp");
      }, []);
     
     const fetchData = async () => {
            console.log( "data here sub");
             await api.get(`/withdrawals`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, "plan sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, "wl sb");
                                                                    setData(res.data.withdrawals) ;
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
                 
 
         
        if(!data){
         return(
            <div>
            <div class="preloader">
               <img src="assets/img/tenor.gif" alt=""/>
            </div>
          {/* <div className="text-center">loading...</div> */}
         </div>
            )
        }else{
    return (

        <div className="card shadow mb-4">
                                          <div className="card-header py-3">
                                              <h6 className="m-0 font-weight-bold text-primary">Withdrawals Request</h6>
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
                                                                   <td> withdrawal</td>
                                                                   <td>{items.amount}</td>
                                                                   <td>{ format(items.createdAt, 'MMMM do yyyy, h:mm:ss a')}</td>
                                                                   <td>{items.isPaid? "Paid": "Pending"}</td>
                                                                  
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
export default WithdrawalUnconfirmTable;