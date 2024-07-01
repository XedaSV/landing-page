import { useState ,useEffect} from 'react';
import api from '../api/defaultRequest';
import { Link ,useNavigate} from "react-router-dom";
import { format } from 'date-fns';
import SidebarAdmin from "./sidebarAdmin";
import HeaderAdmin from "./headerAdmin";
import Footer from "./footer";

function DepositUnconfirmTableAdmin (){
    const [data, setData] = useState([])
    const token = localStorage.getItem('token');  
    const navigate = useNavigate();
  let  headers = ["Bank","Name","AccountNo","Amount","Date","Transfered","Action"];
   
  useEffect(()=>{
        fetchData();
         console.log(data, "ppppp");
      }, []);
     
     const fetchData = async () => {
            console.log( "data here sub");
             await api.get(`/plans/pending`, {  headers: { Authorization: `Bearer ${token}` },})
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
             await api.get(`/deposit/admin/confirm/${value}`, {  headers: { Authorization: `Bearer ${token}` },})
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
             IhavePaid(event.target.value);
        }
       
        if(data.length=== 0){
          console.log(data,"data");
            return(
                <div>
                  <div class="preloader">
                     <img src="assets/img/tenor.gif" alt=""/>
                  </div>
                {/* <div className="text-center">loading...</div> */}
               </div>
                
            )
        } 
        else{

    return (
        <div id="wrapper">
                   <SidebarAdmin/>
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                          <HeaderAdmin/>
                          <div className="row"></div>
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
                                                       
                                                        data.deposits.map((items)=>{
                                                           return(
                                                            <tr>
                                                                   <td> {items.ominiAcct.bank}</td>
                                                                   <td>{items.ominiAcct.name}</td>
                                                                   <td>{items.ominiAcct.accountNo}</td>
                                                                   <td>{items.deposit.amount}</td>
                                                                   <td>{ format(items.deposit.createdAt, 'MMMM do yyyy, h:mm:ss a')}</td>
                                                                   <td>{items.name}</td>
                                                                   <td>  <button className="btn btn-facebook btn-block"
                                                                      value={items.deposit._id}
                                                                      onClick={send}> Mark as Paid </button> 
                                                                       
                                                                       </td> 
                                                          </tr>)
                                                      
                                                        })
                                                    }
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
                                      </div>
                      <Footer/>
                  </div>
       </div> )
}
}

export default DepositUnconfirmTableAdmin;