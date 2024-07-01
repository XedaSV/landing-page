import React, {useState} from "react";

const BalanceCard = (props)=> {

const  {  referral, task , balance,totalEarnings} = props.balance
// const [referralE, setReferralE] = useState(referral);
// const [taskE, setTaskE] = useState(task);
// const [balanceE, setBalanceE] = useState(balance);

    return (
        <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                                      <div className="row">

                                         
                                          

                                          <div className="col-xl-4 col-md-6 mb-4">
                                              <div className="card border-left-success shadow h-100 py-2">
                                                  <div className="card-body">
                                                      <div className="row no-gutters align-items-center">
                                                          <div className="col mr-2">
                                                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                   Balance (Withdrawable)  </div>
                                                              <div className="h5 mb-0 font-weight-bold text-gray-800">₦ {balance}</div>
                                                          </div>
                                                          <div className="col-auto">
                                                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="col-xl-4 col-md-6 mb-4">
                                              <div className="card border-left-primary shadow h-100 py-2">
                                                  <div className="card-body">
                                                      <div className="row no-gutters align-items-center">
                                                          <div className="col mr-2">
                                                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                  (Referral) Earnings</div>
                                                              <div className="h5 mb-0 font-weight-bold text-gray-800">₦ {referral}</div>
                                                          </div>
                                                          <div className="col-auto">
                                                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl-4 col-md-6 mb-4">
                                              <div className="card border-left-success shadow h-100 py-2">
                                                  <div className="card-body">
                                                      <div className="row no-gutters align-items-center">
                                                          <div className="col mr-2">
                                                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                   (Task)  Earnings</div>
                                                              <div className="h5 mb-0 font-weight-bold text-gray-800">₦ {task}</div>
                                                          </div>
                                                          <div className="col-auto">
                                                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl-4 col-md-6 mb-4">
                                              <div className="card border-left-success shadow h-100 py-2">
                                                  <div className="card-body">
                                                      <div className="row no-gutters align-items-center">
                                                          <div className="col mr-2">
                                                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                   (total)  Earnings</div>
                                                              <div className="h5 mb-0 font-weight-bold text-gray-800">₦ {totalEarnings}</div>
                                                          </div>
                                                          <div className="col-auto">
                                                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                         

                                    </div>

     </div>
    );
  }
  
  export default BalanceCard;
  