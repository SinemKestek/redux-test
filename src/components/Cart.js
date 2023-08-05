import { useSelector,useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from "../store/cartSlice";

const Cart = ()=>{
    const products=useSelector(state=>state.cart);
    const dispatch=useDispatch();

 const removeToCart=(id)=>{
    dispatch(remove(id));
    //dispatch
 }



    const cards=products.map(product=>(
        <div className='col-12 ' style={{marginBottom:'10px'}}>
            <Card key={product.id} style={{ width: '45%' }} className='p-2' >
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                </div>
         
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text > Price: 
              {product.price}
            </Card.Text>
            
          </Card.Body>
          <Card.Footer >
          <Button variant="danger" className="d-flex justify-content-end " onClick={()=>removeToCart(product.id)}  >Remove </Button>
      
          </Card.Footer>
      
    
           
        </Card>
    
        </div>
    
       ))




    return (
        <>
        <h3>Basket</h3>
            <div className="row">
                {cards}
            </div>
        </>
    )
}
export default Cart;