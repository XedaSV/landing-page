import { Link ,useNavigate} from "react-router-dom";
function SidebarAdmin() {
   
        return (

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Cyle <sup></sup></div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <a className="nav-link" href="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider"/>


                <div className="sidebar-heading">
                    Interface
                </div>

                <li className="nav-item">
                    <a className="nav-link" href="/profile">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Profile</span></a>
                </li>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
               

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <a className="nav-link" href="/sub-request">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Deposits</span></a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="/withdrawals">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Withdrawals</span></a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="/sub-request">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tasks</span></a>
                </li>
               
            {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block"/>

              

                {/* <!-- Sidebar Message -->
                */}

            </ul>
            
)
 };

export default SidebarAdmin;