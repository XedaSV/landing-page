import Sidebar from "./sidebar";
import Header from "./header";
import BalanceCard from "./balanceCard";
import Footer from "./footer";
import CardOne from "./cardOne";
import api from '../api/defaultRequest';

import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';
import CardTwo from "./cardTwo";

function Dashboard() {
    const [balances, setBalances] = useState({})
    const [plans, setPlans] = useState([])
    const [user, setUser] = useState({});
    const [tasks, setTasks] = useState([])
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
     const fetchpTaskData = async () => {
      const dat = await api.get('/task', {
       headers: { Authorization: `Bearer ${token}` },
     }).then(res => {
       console.log(res.statusText, "get_all_task");
       if (res.statusText === "OK")
        {
          
          console.log(res.data, "tasks pl");
          setTasks(res.data.tasks);
          return  res.data.tasks;
        }
        else {

        }
       }).catch(error => {
           console.log(error);
        });
    };
     fetchData();
     fetchplanData();
     fetchpTaskData();
     setIsloading(false);
   }, [token]);

   
  if (isloading) {
    return(
      <div className="text-center">loading...</div>
  )
  } else {
    
              console.log(balances, "<>");
              console.log(balances.referral, "<ref>");
            if (balances.totalEarnings ===0) {
                console.log(balances.referral, "<ref>");
              

                  return (
                      <div id="wrapper">
                                <Sidebar balance={balances}/>
                
                                <div id="content-wrapper" className="d-flex flex-column">
                                  <div id="content">
                                        <Header user={user}  />
                                        <div className="row">
                                          {
                                              plans.map((plan)=> {
                                                  return(
                                                      <CardTwo plan={ plan}/>
                                                  )
                                              })
                                          }
                                                    
                                        </div>
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
                                    <CardOne obj={tasks} />
                            </div>
                                <Footer/>
                            </div>
                </div>
                    );
            }
          }
 }
    export default Dashboard;