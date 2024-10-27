import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardTile from '../common/CardTile';
import AxiosService from '../utils/AppService'
import { useNavigate } from 'react-router-dom';
import useLogout from '../Hooks/UseLogout'
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import NavItem from './NavItem';
import CardBody from 'react-bootstrap/esm/CardBody';




function Create() {
  let [title,setTitle] = useState("")
  let [imageUrl,setImageUrl] = useState("")
  let [category,setCategory] = useState('')
  let [price,setPrice]=useState("")
  let [stock,setStock]=useState("")
  let navigate = useNavigate()
  // let logout = useLogout()
  let createProduct = async()=>{
    try {
      let res = await AxiosService.post('/inventry/create',{title,imageUrl,category,price,stock})
      if(res.status===201)
      {
        toast.success(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error(error.response.data.message)
     
    }
  }
  return <>
    <div className='container-fluied p-5'>
   
    {/* <nav>
    <div class="">
      <a href="#" ClassName="brand-logo" style={{textAlign:'center'}}><h3> Inventry Mangements </h3></a>
      <ul id="nav-mobile" ClassName="left hide-on-med-and-down">
        <li></li>
     </ul>
    </div>
  </nav> */}
      <div className='inventry-warpper'>
     <div>
     <h3 style={{textAlign:"center",color:"blue"}}>Add Your Products Details! <i className="fa-sharp fa-solid fa-pen-to-square" style={{color:"blue"}}></i></h3>
    
    <Card style={{ width: '25rem', backgroundColor:"rgb(248, 244, 243)",padding:"20px 10px",margin:"20px 250px" }}>
  
    <Form>
    
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title"  onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Image Url"  onChange={(e)=>setImageUrl(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category"  onChange={(e)=>setCategory(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price"  onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control as="textarea" placeholder="Stock"  onChange={(e)=>setStock(e.target.value)}/>
      </Form.Group>

        {/* <h2 style={{textAlign:"center"}}>Preview</h2>
        <div className='blogs-wrappers'>
          <CardTile blog={{title,imageUrl,category,price,stock}}/>
        </div> */}
      <div style={{textAlign:"center"}}>
        <Button variant="primary" onClick={()=>createProduct()}>
          Submit
        </Button>
        <Button variant="dark " onClick={()=>navigate(`/dashboard`)}>Cancle</Button>
       </div>
      
     </Form>
  
     </Card>
     </div>
     </div>
     
    </div>
    </>
}

export default Create