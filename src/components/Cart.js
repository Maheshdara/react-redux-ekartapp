import React from 'react';
import Dashboard from "./Dashboard";
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state=>state.cart)

    const dispatch = useDispatch();

    const removeTocart = (id) =>{
        dispatch(remove(id))
    }


    
    return (
        <div>

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
                <Button variant="danger" onClick={()=>removeTocart(items.id)}>Remove Item</Button>
                </Card.Footer>
              </Card>
              </Col>
             
            )

         })}
        
        </Row>
              </Container>


        </div>
    )
}

export default Cart