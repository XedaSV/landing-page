import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import api from '../api/defaultRequest';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import  undraw_profile from  "../img/undraw_profile.svg";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LivejournalShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  InstapaperIcon,
  LivejournalIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

function Profile (){
  const [balances, setBalances] = useState({});
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


    


      

      if(isloading){
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
                <div id="wrapper">
                        <Sidebar balance={balances} />

                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Header user={user} />
                                <div className="row">
                                <div class="col-xl-4 col-lg-5">
                                        <div class="card shadow mb-4">
                                            <div class="card-header py-3">
                                                <h6 class="m-0 font-weight-bold text-primary text-center">{user.fullName}</h6>
                                            </div>
                                            <div class="card-body">
                                              <div className="text-center">
                                              <img className=" img-profile rounded-circle myimage"
                                                        src={undraw_profile} />
                                              </div>
                                              
                                              <div className="shadow p-3 mb-5 bg-body-tertiary">

                                        
                                                <p className="shadow p-3 mb-5 bg-body-tertiary">UserName: {user.userName}</p>
                                                <p className="shadow p-3 mb-5 bg-body-tertiary">Email : {user.email} </p>
                                                {/* <p className ="shadow p-3 mb-5 bg-body-tertiary ">Guilder Code:  {user.refferedBy} </p> */}
                                                <p className ="shadow p-3 mb-5 bg-body-tertiary">My Referral Code:  {user.refferalCode} </p>
                                                </div> 
                                                <CopyToClipboard text={`${window.location.origin}/${user.refferalCode}`}>
                                                <button   className="btn btn-facebook btn-block">Copy</button>
                                                </CopyToClipboard>
                                                <p className="text-center"> OR</p>
                                               
                                                <hr/>
                                                <p className="text-center">Share</p>
                                                <div className="text-center">
                                                <FacebookShareButton url={`${window.location.origin}/${user.refferalCode}`}
                                                quote={"Make money by just performing simple tasks and 40% from referrals"} >
                                                  <FacebookIcon size={40}  round={true}></FacebookIcon>
                                                </FacebookShareButton>
                                                <WhatsappShareButton url={`${window.location.origin}/${user.refferalCode}`} 
                                                title={"Make money by just performing simple tasks and 40% from referrals"} >
                                                  <WhatsappIcon size={40} round={true}></WhatsappIcon>
                                                </WhatsappShareButton>
                                                <TelegramShareButton  url={`${window.location.origin}/${user.refferalCode}`} 
                                                title={"Make money by just performing simple tasks and 40% from referrals"}>
                                                  <TelegramIcon size={40}  round={true}></TelegramIcon>
                                                </TelegramShareButton>
                                                <TwitterShareButton  url={`${window.location.origin}/${user.refferalCode}`} 
                                                title={"Make money by just performing simple tasks and 40% from referrals"}
                                                hashtags={["CYLE","MakingMoney"]}>
                                                  <XIcon size={40} round={true}></XIcon>
                                                </TwitterShareButton>
                                                </div>
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
export default Profile;