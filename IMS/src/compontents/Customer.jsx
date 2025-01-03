import AxiosService from '../utils/AppService'
import { useEffect,useState } from "react"
import useLogout from '../Hooks/UseLogout'
import { toast } from 'react-toastify'
import Table from 'react-bootstrap/Table';
function Customer() {
  let [data,setData] = useState([])
  let logout = useLogout() 
 
  let getUsers = async()=>{
    try {
        let res = await AxiosService.get(`/user`)
       console.log(res)
        if(res.status===200)
        {
           setData(res.data.user)
        }
    } catch (error) {
       
          toast.error(error.response.data.message)
       
    }
  }
  useEffect(()=>{
    getUsers()
  },[])
 

  return (
    <>
    <div className='table'>
    <div className="d-sm-flex  heading  ">
        <h1 className="h3 text-blue-800" style={{color:'blue',paddingBottom:"20px"}}> Asset Management Inventory Customer Details</h1>
        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i className="fas fa-fw fa-tachometer-alt"></i> Dashboard Report</a> */}
                 <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm logout" onClick={()=>logout(`/`)} style={{marginLeft:"390px"}}>Logout </a>
                 </div>
                 <div>
    <Table striped bordered hover  className='table-over'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {
            data.map((e,i)=>{
              return <tr key = {e._id}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>{e.status?"Active":"Inactive"}</td>
              </tr>
            })
          }
      </tbody>
    </Table>
 </div>
    </div>
  
    </>
  )
}

export default Customer