import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return <>
    <ul className="navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
    <div className="sidebar-brand-icon rotate-n-15">
       
    </div>
    <i className="fa-duotone fa-person-fairy"></i>
    <div className="sidebar-brand-text mx-3">INVENTORY </div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>
{/* 
<!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
<div className="nav-link ">
       
       <Link to='/home'>
       <i className="fa-solid fa-house"></i>
        <span style={{color:"white text-decoration: none"}} >Home</span>
       </Link>
    </div>
    </li>
<li className="nav-item active">
    <div className="nav-link " >
        <Link to='/dashboard'>
        <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:"white"}}> Dashboard</span>
        </Link>
    </div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item active">
    <div className="nav-link">
       <Link to='/create'>
      
        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <span style={{color:"white"}}>Add Products</span>
       </Link>
    </div>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
{/* <li className="nav-item active">
    <div className="nav-link">
       
       <Link to='/inventry'>
        <i className="fas fa-fw fa-wrench"></i>

        <span style={{color:"white"}}>Inventry</span>
       </Link>
    </div>
</li> */}

<li className="nav-item active">
    <div className="nav-link">
       
       <Link to='/customer'>
       <i className="fa-solid fa-users"></i>

        <span style={{color:"white"}}>customer</span>
       </Link>
    </div>
</li>

<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
 {/* <div className="sidebar-heading">
    Hooks
</div> */}

<li className="nav-item">
    {/* <div className="nav-link">
       
       <Link to='/home'>
       <i class="fa-solid fa-house"></i>
        <span style={{color:"white"}}>Home</span>
       </Link>
    </div> */}
    <div className="nav-link">
       
     
    </div>
</li>

</ul> 
  </>
}

export default Header