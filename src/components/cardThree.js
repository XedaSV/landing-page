import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import api from '../api/defaultRequest';
import SidebarAdmin from "./sidebarAdmin";
import HeaderAdmin from "./headerAdmin";
function CardThree (){
    const params = useParams();
  console.log(params.id,"id-");
    const [data, setData] = useState({});
    const [isloading, setIsloading] = useState(true);
   const token = localStorage.getItem('token');
   const navigate = useNavigate();

   useEffect(()=>{
    fetchData();
     console.log(data, "ppppp");
  }, []);
    
  const fetchData = async () => {
    console.log( "data here sub");
     await api.get(`/withdraw/pendingby/${params.id}`, {  headers: { Authorization: `Bearer ${token}` },})
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
             await api.get(`/withdraw/confirm/${value}`, {  headers: { Authorization: `Bearer ${token}` },})
                                                            .then(res => {
                                                                console.log(res.statusText, " sub");
                                                                if (res.statusText === "OK")
                                                                {
                                                                    
                                                                    console.log(res.data, " sb");
                                                                   // setplans(res.data) ;
                                                                    //console.log(plans, "pl af");
                                                                    navigate("/withdrawals-admin");
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

  if(!data){
            return(
                   <div className="text-center">loading...</div>
               )
  }else{
        return (
            <div id="wrapper">
                    <SidebarAdmin/>

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <HeaderAdmin/>
                            <div className="row">
                            <div class="col-xl-4 col-lg-5">
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary"></h6>
                                        </div>
                                        <div class="card-body">
                                          <div className="shadow p-3 mb-5 bg-body-tertiary">

                                    
                                            <p className="shadow p-3 mb-5 bg-body-tertiary">{data.name}</p>
                                            <p className="shadow p-3 mb-5 bg-body-tertiary">Bank : {data.bank} </p>
                                            <p class ="m-0 font-weight-bold text-primary">Account No : {data.accountNo} </p>
                                            </div> 
                                            <button  value={params.id} onClick={send} class="btn btn-facebook btn-block"> confirm</button>
                                        </div>
                                    </div>
                                </div>     
                            </div>
                    </div>
                        <Footer/>
                    </div>
        </div>
            )
     }
}
export default CardThree;