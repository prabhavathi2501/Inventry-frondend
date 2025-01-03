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
      <div className='col-6 p-2'>
      <img src='' className='image-row'></img>
        <div >
     </div>
      </div>
        <div className='col-5 b-2' style={{padding:"50px 10px",}}>
     {/* <h3 className='signup ' style={{textAlign:"center",background:""}}><i className="fa-solid fa-user-plus"></i>Signup Here!</h3>  */}
    <Card className='card singup-card ' style={{ width: '22rem', backgroundColor:" ",border:"1px solid block"}}>
      <Card.Body style={{ width: '20rem',height:"31rem" ,}}>
      <Form>
      <Form.Group className="mb-3" >
        <h3 style={{alignContent:"center",color:"blue",paddingLeft:"60px"}}>singn up</h3>
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
        <Button className='signup-btn' variant="primary" style={{paddingLeft:""}}  onClick={handleSignup}>
          Signup
        </Button>
        &nbsp;
        &nbsp;
        &nbsp;
        <p style={{alignContent:"center"}}>Already have account?<a href='/signin'>Loging</a>Here</p>
      </Form>
      </Card.Body>
      </Card>
      </div>
      {/* <div className='col-3'></div> */}
      </div>
    </div>
   
   
  </>
}

export default Signup