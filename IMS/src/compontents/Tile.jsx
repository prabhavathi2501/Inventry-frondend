import React from 'react'
import useLogout from '../Hooks/UseLogout'
import { Navigate, useNavigate } from 'react-router-dom'

function Tile() {
    let navigate=useNavigate()
    
    let dashboardData = [{
        color:'primary',
        icon:'fa-calendar',
        title:'Earnings (Monthly)',
        value:'$80,000'
    },
    {
        color:'success',
        icon:'fa-dollar-sign',
        title:'Earnings (Annual)',
        value:'$5,15,000'
    },
    {
        isProgress:true,
        color:'info',
        icon:'fa-clipboard-list',
        title:'Sales',
        value:'80'
    },
    {
        color:'warning',
        icon:'fa-comments',
        title:'Pending Stock',
        value:'18'
    }
    ]
  return <>
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 "style={{color:"violet"}}>INVENTORY  MANAGEMENTS </h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fa-solid fa-house"></i> Generate Report</a>
                 <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={()=>navigate('/')}>Logout </a>
    </div>
    <div className="row">
       {
        dashboardData.map((e,i)=>{
            return <TileCard color={e.color}
                         icon={e.icon}
                         title={e.title}
                         value={e.value}
                         isProgress={e.isProgress}

                         key={i}
                        />
        })
       }
    </div>
    </div>
  </>
}
function TileCard({color,icon,title,value,isProgress=false}) {
    return <>
    {
      isProgress ?
      <>
          <div className="col-xl-3 col-md-6 mb-4">
              <div className={`card border-left-${color} shadow h-100 py-2`}>
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}
                              </div>
                              <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{value}%</div>
                                  </div>
                                  <div className="col">
                                      <div className="progress progress-sm mr-5">
                                          <div className={`progress-bar bg-${color}`} role="progressbar"
                                              style={{
                                                      width: `${value}%`,
                                                      ariaValueNow:`${value}`, 
                                                      ariaValueMin:"0",
                                                      ariaValueMax:"100"
                                                  }}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-auto">
                              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
      :
      <>
          <div className="col-xl-3 col-md-6 mb-4">
              <div className={`card border-left-${color} shadow h-100 py-2`}>
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                                  {title}</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                          </div>
                          <div className="col-auto">
                              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>  }
    </>
  }
export default Tile