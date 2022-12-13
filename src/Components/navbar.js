import logo from './logo.png';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg sticky-top'>
        <div className='container bottom-head'>
            <div className='center-wrapper clearfix'>
                <div className="logo left">
                    <a href="#"><img src={logo}></img></a>
                </div>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse navbar right' id='navbarCollapse'>
                    <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/corporate-profile">Corporate Profile</Link>
                       <ul className='sub-menu'>
                        <li><Link to="/About">About Us</Link></li>
                        {/* <li><Link to="/coporate-profile">Tiara Team</Link></li> */}
                        {/* <li><Link to="/coporate-profile">Vision and Mission</Link></li> */}
                        {/* <li><Link to="/coporate-profile">Our Quality Control Policy</Link></li> */}
                       </ul>
                    </li>
                    <li>
                    <Link to="/services">Services</Link>
                        <ul className='sub-menu'>
                          <li><Link to="/Construction-machinery">Construction Machinery On Rent</Link></li>
                          {/* <li><Link to="/coporate-profile">Construction Factory & WAREHOUSE Construction</Link></li> */}
                          {/* <li><Link to="/coporate-profile">Building & Bungalow Construction</Link></li> */}
                          {/* <li><Link to="/coporate-profile">Piling Contractor</Link></li> */}
                        </ul>
                    </li>
                    <li>
                    <Link to="/tender">Tender</Link>
                    </li>
                    <li>
                    <Link to="/job">Job</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                    </ul>
                 </div>
            </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
