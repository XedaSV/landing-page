import Sidebar from "./sidebar";
import Header from "./header";
import BalanceCard from "./balanceCard";
import Footer from "./footer";
import CardOne from "./cardOne";
import api from '../api/defaultRequest';

import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';
import CardTwo from "./cardTwo";
import DepositUnConfirmTable from "./DepositDash";

function DashboardTwo() {
    const [balances, setBalances] = useState({})
    const [plans, setPlans] = useState([]);
    const [user, setUser] = useState({});
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

            // if (resp.data.stackTrace) {
            //     res.message = resp.data.message;
            //     res.success = false;
            //     navigate('/login');
            // }
            // else{
            //     res.data = response.data;
            //     res.success = true;
            // }
            
            
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
     fetchplanData();
     
   }, [token]);

   const datas ={
    headers : [ "Name","Description", "Link"],
    data: [ {Name: "Like", Description: "Go to facebook and like my page", Link:"https://www.youtube.com/watch?v=haeyo55iU6s&ab_channel=CalebCurry"}, 
    {Name: "Like", Description: "Go to facebook and like my page", Link:"https://www.youtube.com/watch?v=haeyo55iU6s&ab_channel=CalebCurry"}],
    headline: "Task"
  
};
if (isloading) {
  return(
    <div>
    <div class="preloader">
       <img src="assets/img/tenor.gif" alt=""/>
    </div>
  {/* <div className="text-center">loading...</div> */}
 </div>
)
} else {
  console.log(balances.referral, "rff");
  
  if (balances.totalEarnings ===0) {

  
 

    return (
        <div id="wrapper">
                   <Sidebar balance={balances} />
  
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                          <Header  user={user} />
                          <div className="row">
                            {
                                plans.map((plan)=> {
                                    return(
                                        <CardTwo plan={ plan}/>  
                                    )
                                })
                            }
                          </div>
                          <DepositUnConfirmTable/> 
                  </div>
                      <Footer/>
                  </div>
       </div>
          );
  } else {
    return (
        <div id="wrapper">
                  <Sidebar balance={balances} />
  
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                          <Header user={user} />
                          <BalanceCard balance= {balances} />
                          {/* <Table data={datas} /> */}
                          <DepositUnConfirmTable/> 
                          <div className="row">
                                      {/* <div className="col-lg-6">
                                          <CardOne/>
                                      </div> */}
                          </div>
                  </div>
                      <Footer/>
                  </div>
       </div>
          );
  }
    
}
  
    }
    export default DashboardTwo;