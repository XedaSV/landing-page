import './landingpage.css'
import { Link } from 'react-router-dom';
function LandingPage (){

    return (
    <div className="homepage-3">
      

     <div className="mobile-navbar-wrapper">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2 >  Xeda </h2> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
    <span class="navbar-text">
        Services
      </span>
      <ul className="navbar-nav ml-auto">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu">
            <li>
                <Link className='dropdown-item' to="/">Cleaning Services</Link>
                </li>
            <li><Link className='dropdown-item' to="/man+van">Man and Van</Link></li>
          </ul>
        </li>
                                                <li className="nav-item">
                                                    <a className='nav-link' href='#services'>Services</a>
                                                </li>
                                                <li className="nav-item join-now-btn">
                                                    <a className="nav-link " href="#about">Contact Us</a>
                                                </li>
                                            </ul>
      
    </div>
  </div>
</nav>

       
            <div className="banner  banner-style-2">
                <div className="container">
                    <div className="row justify-content-xl-between justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-xl-7 col-lg-7 col-sm-10 col-md-9 d-xl-flex d-lg-flex d-block align-items-center d-banner-tamim">
                            <div className="banner-content">
                                <h4>Xeda Cleaning Services</h4>
                                <h1>Welcome to Xeda Cleaning Services
                                Your Trusted Partner for Sparkling Clean Spaces
                                </h1>
                                
                                <p></p>
                                <a href="#about" className="btn-hyipox">Contact Us</a>
                            </div>
                           
                        </div>
                        <div className="col-xl-4 col-lg-5 col-sm-10 col-md-8 monitor-for-480">
                            <div className="profit-calculator">
                            <div className="calc-header">
                                    <h3 className="title"><Link className='dropdown-item' to="/man+van">Man and Van</Link> 
                                    </h3>
                                </div>
                                <div className="calc-header">
                                    <h3 className="title"><Link className='dropdown-item' to="/">Cleaning Services</Link>
                                    </h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="services">
            <div className="about">
                <div className="container">
                    <div className="how-to-works">
                        <div className="row justify-content-center justify-content-sm-center justify-content-md-start">
                         </div>
                    </div>
                </div>
                <div className="testimonial">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title">
                                <span className="sub-title">
                                Xeda Cleaning Services
                                </span>
                                <h2>
                                   We offer /<span className="special"> Our Services</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="all-testimonials">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-8">
                                <div className="testi-text-slider">
                                    <div className="single-testimonial">
                                        <span className="quot-icon">
                                            <img src="assets/img/icon/quot.png" alt=""/>
                                        </span>
                                        <p> From cozy apartments to spacious homes, we transform your living spaces into pristine retreats.</p>
                                        <div className="part-user">
                                            <span className="user-name">Residential Cleaning</span>
                                            <span className="user-location">Any time</span>
                                        </div>
                                    </div>

                                    <div className="single-testimonial">
                                        <span className="quot-icon">
                                            <img src="assets/img/icon/quot.png" alt=""/>
                                        </span>
                                        <p>Boost productivity and create a positive impression with our office and commercial cleaning solutions.</p>
                                        <div className="part-user">
                                            <span className="user-name">Commercial Cleaning</span>
                                            <span className="user-location">Any time</span>
                                        </div>
                                    </div>
                                    
                                    <div className="single-testimonial">
                                        <span className="quot-icon">
                                            <img src="assets/img/icon/quot.png" alt=""/>
                                        </span>
                                        <p>We go beyond the surface to eliminate hidden dirt, allergens, and grime.</p>
                                        <div className="part-user">
                                            <span className="user-name">Deep Cleaning</span>
                                            <span className="user-location">Any time</span>
                                        </div>
                                    </div>
                                    <div className="single-testimonial">
                                        <span className="quot-icon">
                                            <img src="assets/img/icon/quot.png" alt=""/>
                                        </span>
                                        <p>Say goodbye to stubborn stains and odors with our expert carpet cleaning and Crystal-clear windows that enhance your view and brighten your day.</p>
                                        <div className="part-user">
                                            <span className="user-name">Carpet and window Washing</span>
                                            <span className="user-location">Any time</span>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                <div className="container">
                    <div className="row justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-center">
                        <div className="col-xl-6 col-lg-6 col-sm-10">
                            <div className="part-text">
                                <h2>Why Choose <span className="special">Xeda? </span></h2>
                                
                                <ul>
                                    <li><i className="fas fa-check"></i>Quality Assurance </li>
                                    <li><i className="fas fa-check"></i> Eco-Friendly Approach </li>
                                    <li><i className="fas fa-check"></i> Flexible Scheduling</li>
                                    <li><i className="fas fa-check"></i> Customer Satisfaction </li>
                                </ul>
                                <p><span className="spc">Quality Assurance:</span>  Our meticulous attention to detail ensures exceptional results every time. </p>
                                <p><span className="spc">Eco-Friendly Approach:</span>  We use environmentally friendly products for a healthier planet. </p>
                                <p><span className="spc">Flexible Scheduling:</span>  Book at your convenience – weekly, bi-weekly, or one-time services. </p>
                                <p><span className="spc">Customer Satisfaction:</span>  Our satisfied clients speak for our commitment to excellence. </p>
                                
                                <a href="#about" className="btn-hyipox-2">Message us now..</a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-sm-10 col-md-12">
                            <div className="part-feature">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-6">
                                        <div className="single-feature">
                                            <div className="feature-icon">
                                                <img src="assets/img/svg/solar-energy.svg" alt=""/>
                                            </div>
                                            <div className="feature-text">
                                                <h3>Delivery</h3>
                                                <p>We deliver on our promises </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-6">
                                        <div className="single-feature">
                                            <div className="feature-icon">
                                                <img src="assets/img/svg/diploma.svg" alt=""/>
                                            </div>
                                            <div className="feature-text">
                                                <h3>We're Certified</h3>
                                                <p> Yes you heard us , Real Services</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-6">
                                        <div className="single-feature">
                                            <div className="feature-icon">
                                                <img src="assets/img/svg/worldwide.svg" alt=""/>
                                            </div>
                                            <div className="feature-text">
                                                <h3>We Provide Services any where </h3>
                                                <p>Yes we 're Global</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-6">
                                        <div className="single-feature">
                                            <div className="feature-icon">
                                                <img src="assets/img/svg/blockchain.svg" alt=""/>
                                            </div>
                                            <div className="feature-text">
                                                <h3>24 / 7 Response</h3>
                                                <p>We are here for you, Anytime all day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            
    
           
           
           

            <section id="about">
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                                <div className="about-widget">
                                    <a className='logo' href='/'>
                                        <h2>  <span className="special">Xeda</span></h2> 
                                    </a>
                                    
                                    <p>At Xeda, we believe that a clean environment contributes to a healthier, happier life. Our dedicated team of professionals is committed to providing top-notch cleaning services tailored to your needs. Whether it’s residential, commercial, or specialized cleaning, we’ve got you covered.</p>
                                    <div className="social-links">
                                        <ul>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-10">
                                <div className="link-widget">
                                    <h4 className="title">
                                        Useful links
                                    </h4>
                                    <ul>
                                        <li>
                                        <Link className='single-link' to="/man+van">Man and Van</Link>
                                        </li>
                                        <li>
                                        <Link className='single-link' to="/">Cleaning Services</Link>
                                           
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-10">
                                <div className="newsletter-widget">
                                    <h4 className="title">
                                        For bookings, Email us
                                    </h4>
                                    <form className="newsletter-form">
                                        <input type="email" placeholder="Enter Your Mail Address"/>
                                        <a className="def-btn def-small text-center align-center" href="mailto:xedaservices5@gmail.com">
                                           Email Us
                                        </a>
                                    </form>
                                    <p>📞 Call us at : +447827739121  📧 Email:  xedaservices5@gmail.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-8">
                                <p>Copyright © <a href='/'>Xeda</a> - 2024. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>
            
        </div> 

        <div className="d-xl-none d-lg-none d-block">
            <div className="mobile-navigation-bar">
                <ul>
                   
                    <li>
                        
                    </li>
                    <li>
                        <a href="#header">
                            <img src="assets/img/svg/arrow.svg" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="d-xl-block d-lg-block d-none">
            <div className="back-to-top-btn">
                <a href="#">
                    <img src="assets/img/svg/arrow.svg" alt=""/>
                </a>
            </div>
        </div>

        </div>
        )
    }
 export default LandingPage;    