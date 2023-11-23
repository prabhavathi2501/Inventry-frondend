import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import useLogout from '../Hooks/UseLogout'
import {toast} from 'react-toastify'
import AxiosService from '../utils/AppService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function inventery() {
 
     let userData = JSON.parse(sessionStorage.getItem('userData'))
  let logout = useLogout()
  return <>
    <div>
   
   <EditInventry/>
     </div>
  </>
}
function EditInventry(){
   let params = useParams()
  let [title,setTitle] = useState("")
  let [imageUrl,setImageUrl] = useState("")
  let [category,setCategory] = useState("")
  let [price,setPrice]= useState("")
  let[stock,setStock]=useState("")
  let [inventry,setInventery] = useState({})
  let navigate = useNavigate()
 
  let getInventery = async()=>{
    try {
      let res = await AxiosService.get(`/inventry/${params.id}`)
      console.log(res)
      if(res.status===200)
     
      {
          setTitle(res.data.inventery.title)
          setImageUrl(res.data.inventery.imageUrl)
          setCategory(res.data.inventery.category)
          setPrice(res.data.inventery.price)
          setStock(res.data.inventery.stock)
          setInventery(res.data.inventry)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
  }

  useEffect(()=>{
   
    getInventery()
   
      
   
  },[])
  let editinventry = async()=>{
    try {
      let res = await AxiosService.put(`/inventry/edit/${params.id}`,{
        title,imageUrl,category,price,stock
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        navigate('/dashboard')
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
   
  <div className='container-fluied p-5 mx-6 my-6'>

  <h3 style={{textAlign:'center',color:"red"}}> <i className="fa-sharp fa-solid fa-pen-to-square" style={{color:"blue"}}></i>Edit Here!</h3>
    <Card style={{width:"30rem",height:"30rem",padding:"20px"}}>
    <Form>
    
    <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text"value={title} placeholder="Enter Title"  onChange={(e)=>setTitle(e.target.value.title)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Image Url</Form.Label>
      <Form.Control type="text" value={imageUrl} placeholder="Image Url"  onChange={(e)=>setImageUrl(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Category</Form.Label>
      <Form.Control type="text"value={category} placeholder="Category"  onChange={(e)=>setCategory(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" value={price} placeholder="Price"  onChange={(e)=>setPrice(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Stock</Form.Label>
      <Form.Control as="textarea" value={stock} placeholder="Stock"  onChange={(e)=>setStock(e.target.value)}/>
    </Form.Group>
    <div style={{textAlign:"center"}}>
        <Button variant="primary" onClick={()=>editinventry()}>
          Save
        </Button>
        <Button variant='danger'onClick={()=>navigate('/dashboard')}>Cancel</Button>
       </div>
</Form>
</Card>
</div>
  </>
}


export default inventery