import React,{ useEffect,useState} from 'react'
import AxiosService from '../utils/AppService'
// import Inventry from './Inventry'
 import Table from 'react-bootstrap/Table'
 import useLogout from '../Hooks/UseLogout'
 import CardTile from '../common/CardTile'
 import {toast} from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'



function Dashboard() {
  useEffect(()=>{
    getInventry()
  },[])
 
  let [inventery,setInventery] = useState([])
 
 
 let navigate =useNavigate()
  let logout = useLogout()
  
  let getInventry = async()=>{
    try {
      let res =await AxiosService.get('/inventry')
      if(res.status===200)
      {
        setInventery(res.data.inventery)
      }
    } catch (error) {
      toast.error(error.response.data.message)
     
    }
  }
 let deleteProduct = async(id)=>{

  try {
    let res = await AxiosService.delete(`/inventry/${id}`)
    if(res.status===200)
    {
      toast.success(res.data.message)
      
    }
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
    if(error.response.status===401)
    {
      logout()
    }
  }

 }
  return <>
 <div className='container-fluid p-5'>
  <div className='blogs-wrapper'>  
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-blue-800" style={{color:"blue"}}> Asset Management Inventory</h1>
        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i className="fas fa-fw fa-tachometer-alt"></i> Dashboard Report</a> */}
                 <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={()=>navigate(`/`)}>Logout </a>
    </div>
  <div >
 <nav>
    <div class="">
      <a href="#" ClassName="brand-logo" style={{textAlign:'center'}}><h3> Inventry Mangements </h3></a>
      <ul id="nav-mobile" ClassName="left hide-on-med-and-down">
     </ul>
    </div>
  </nav>
  </div>
  <div className='container p-3' >
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>category</th>
          <th>Price</th>
          <th>Stcok</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
      inventery.map((e,i)=>{
            return <tr key={e._id}  className='cursor-pointer'>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td><img src={e.imageUrl} className='table-image'/></td>
              <td>{e.category}</td>
              <td>{e.price}</td> 
              <td>{e.stock} </td>
              <td>

              <a href="#!" class="btn waves-effect waves-yellow " onClick={()=>navigate(`/inventry/${e._id}`)} ><i class="fa-sharp fa-solid fa-pen-to-square"></i>Edit</a>
              &nbsp;
              &nbsp; 
              <a href="#!" class="btn waves-effect waves-purple"onClick={()=>{deleteProduct(e._id)}}><i className="fa-sharp fa-solid fa-trash"></i>Delete</a>                                 
  
        </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
    </div>
</div>
  </>
}

export default Dashboard