import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import WithdrawalUnconfirmTableAdmin from "./WithdrawalUnconfirmTableAdmin";
import { Link ,useNavigate,useParams} from "react-router-dom";
import api from '../api/defaultRequest';
import { useState ,useEffect} from 'react';
import SidebarAdmin from "./sidebarAdmin";
import HeaderAdmin from "./headerAdmin";

function DashboardLayoutWithdrawalsAdmin() {
  const [balances, setBalances] = useState({})
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true);
   const token = localStorage.getItem('token');
   const navigate = useNavigate();


   useEffect(() => {
    const fetchData = async () => {
       let res = {
           success : false,
           message: "",
           data : {}
       };

       if (!token) {
           navigate('/login');
       }
       
        const responses = await api.get('/currentuser', {
           headers: { Authorization: `Bearer ${token}` },
           }).then(resp => {

           console.log("RP-DATA",resp.data);
           console.log(resp.status);
           console.log(resp.statusText, "tt");

           if (resp.statusText === "OK") {
             console.log(resp.statusText, "tto");
               res.data = resp.data;
               res.success = true;
               const {refferalBalance, taskBalance, balance,totalEarnings } = res.data.balance
               console.log(refferalBalance);
               console.log(taskBalance);
               setBalances({  referral : refferalBalance, task:taskBalance, balance: balance, totalEarnings:totalEarnings});
               setUser(res.data.user);
               setIsloading(false);
              return  res.data;
           }else if(resp.status=== 401)  {
               console.log(resp.statusText, "else");
               res.message = resp.data.message;
               res.success = false;
               navigate('/login');
           }

           
         })
         .catch(error => {
           if (error.response) {
               console.log(error);
             console.log("err-s",error.response.status);
             navigate('/login');
           }
         });
        
    };

    fetchData();
  }, [token]);


    return (
        <div id="wrapper">
                   <SidebarAdmin/>
  
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    <HeaderAdmin />
                          <div className="row">
                            <WithdrawalUnconfirmTableAdmin/>
                                      
                          </div>
                  </div>
                      <Footer/>
                  </div>
       </div>
          );
  } 
    export default DashboardLayoutWithdrawalsAdmin;