import { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch ,useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import  {getProducts}  from '../store/productSlice';

const Product=()=>{

const dispatch=useDispatch();
const {data:products}=useSelector(state=>state.products)

    useEffect(()=>{
// api
   dispatch(getProducts());
   console.log(products)
    },[]);

    const addToCart =(product)=>{
        //dispatch
        dispatch(add(product))
    }



   const cards=products.map(product=>(
    <div className='col-md-4 mb-4 col-sm-6 ' style={{marginBottom:'10px'}}>
        <Card key={product.id} style={{ width: '18rem' }} className='p-2' >
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
      <Button variant="warning" onClick={()=>addToCart(product)} >Add To Basket</Button>
  
      </Card.Footer>
  

       
    </Card>

    </div>

   ))





return (
<>

<div className='d-flex justify-content-center'><h1>Product Dashboard</h1></div>
<div className='row mx-auto '>
{cards}
</div>


</>

)

}
export default Product;