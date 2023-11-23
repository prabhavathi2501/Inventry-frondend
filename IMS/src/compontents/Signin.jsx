import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/AppService'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function Signin() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate=useNavigate()

  let  handleLogin = async()=>{
    try {
      let res = await AxiosService.post('/user/login',{
        email,
        password
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
      }
      if(res.data.userData.role ==='admin')
      {
        navigate('/dashboard')
      }
      else
      {
navigate('/home')
      }
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
    <div className='container signin p-5 mt-5 'style={{}}>
      <div className='row ' >
      <div className='col-6 p-2 mt-5 photo'>
        <div className=''>
        </div>
      </div>
      <div className='col-1'>
        <div className=''>

        </div>
      </div>
        <div className='col-5 b-5 p-2 '>
    <h1 style={{textAlign:"center",color:"white"}}>Login Here!</h1>
    <Card style={{ width: '25rem',height:"18rem",background:"" }}>
      <Card.Body>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary"  onClick={handleLogin}>
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
     
      </div>
    </div>
  </>
}

export default Signin