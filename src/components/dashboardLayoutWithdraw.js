import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import { Link ,useNavigate,useParams} from "react-router-dom";
import Withdraw from "./withdraw";
import { useState ,useEffect} from 'react';
import api from '../api/defaultRequest';

function DashboardLayoutWithdraw() {
  const params = useParams();
  console.log(params.id,"id");
  const [balances, setBalances] = useState({})
  const [plans, setPlans] = useState([])
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
   const fetchplanData = async () => {
     const dat = await api.get('/plans', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      console.log(res.statusText, "get_all_plan");
      if (res.statusText === "OK")
       {
         
         console.log(res.data, "pl d");
         return  res.data.plans;
       }
       else {

       }
      }).catch(error => {
          console.log(error);
        
       });
     console.log(dat, "dat")
     setPlans(dat);
     return dat;
   };
   fetchData();
 }, [token]);

    return (
        <div id="wrapper">
                    <Sidebar  balance={balances} />
                <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                  <Header user={user}  />
                          <div className="row">
                            <Withdraw/>
                                      
                          </div>
                  </div>
                      <Footer/>
                  </div>
       </div>
          );
  } 
    export default DashboardLayoutWithdraw;