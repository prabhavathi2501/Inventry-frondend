import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/AppService'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function Signup() {
  let [firstName,setFirstName] = useState("")
  let [lastName,setLastName]=useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  
  let navigate=useNavigate()

  let  handleSignup = async()=>{
    try {
      let res = await AxiosService.post('/user/signup',{
       firstName,
       lastName,
        email,
       password,
        
        
      })
      if(res.status===201)
      {
        navigate('/signin')
        toast.success(res.data.message)
       
      }
      
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
  
    <div className='container-fluid  signup'>
      <div className='row'>
      <div className='col-1 p-2'>
        <div >
      <img src=' '></img></div>
      </div>
        <div className='col-4 b-3'>
    <h1 className='signup ' style={{textAlign:"center",background:""}}><i className="fa-solid fa-user-plus"></i>Signup Here!</h1>
    <Card className='card  ' style={{ width: '25rem',background:"" }}>
      <Card.Body style={{ width: '25rem',height:"30rem" }}>
      <Form>
      <Form.Group className="mb-3" >
          <Form.Label>First Name </Form.Label>
          <Form.Control type="text" placeholder="Enter FirstName" onChange={(e)=>setFirstName(e.target.value)}/>
         </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label>LastName </Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" onChange={(e)=>setLastName(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button className='btns' variant="primary"  onClick={handleSignup}>
          Signup
        </Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
      <div className='col-2'></div>
      </div>
    </div>
    
   
  </>
}

export default Signup