import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Dashboard from "./Dashboard";
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {

  const dispatch = useDispatch();

    const[products,setProducts] = useState([])

    const fetchProducts = async () => {
      const getPosts = await axios.get("https://fakestoreapi.com/products")
      console.log(getPosts.data);
      setProducts(getPosts.data);
  
    }
    useEffect(()=>{
        fetchProducts();
       },[])

       const addToCart = (items) => {
        dispatch(add(items))
       }
    
  
  return (
   <>
   <Dashboard/>
    <Container fluid>
                   <Row>  
         {products.map((items)=>{
            return(
               
       <Col md={3} style={{marginBottom:"10px"}}>
                <Card  className='h-100'  key={products.id}  >
                    <div className='text-center'>
                <Card.Img variant="top" src={items.image} style={{width:"100px",height:"130px"}} />
                </div>
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>
                   INR:{items.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button variant="primary" onClick={()=>addToCart(items)}>Add To Cart</Button>
                </Card.Footer>
              </Card>
              </Col>
             
            )

         })}
        
        </Row>
              </Container>
              </>
  )
}

export default Products