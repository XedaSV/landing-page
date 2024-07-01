import Sidebar from "./sidebar";
import Header from "./header";
import BalanceCard from "./balanceCard";
import Footer from "./footer";
import CardOne from "./cardOne";
import api from '../api/defaultRequest';

import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';
import CardTwo from "./cardTwo";
import SidebarAdmin from "./sidebarAdmin";
import HeaderAdmin from "./headerAdmin";

function DashboardAdmin() {
    const [balances, setBalances] = useState({})
    const [, setPlans] = useState([])
   const token = localStorage.getItem('token');
   const navigate = useNavigate();

   useEffect(() => {
   },[]);
 

    return (
        <div id="wrapper">
                   <SidebarAdmin/>
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                          <HeaderAdmin/>
                          <div className="row">
                            {
                               
                            }
                          </div>
                          {/* <DepositUnconfirmTableAdmin/>  */}
                  </div>
                      <Footer/>
                  </div>
       </div>
          );
 
    
    }
    export default DashboardAdmin;