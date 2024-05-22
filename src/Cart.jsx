import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import './Cart.css'
import { setQuantity } from "../src/detailsSlice";

function Cart() {
    // dispatch hook used to call actions in slice reducers and make changes in state
    const dispatch = useDispatch();
    //array of object in initialstate of detailsSlice is declared to a variable to access in the component
    const products = useSelector(state => state.productDetails.products);
    //to generate available stockQuantity as selectOption in cart, stock of perunit was dynamically generated and declared to an array
    const generateOptions = (stock) =>{
        let option = [];
        for(let i=1;i<=stock;i++){
         option.push(<option key={i} value={i}>{i}</option>);
        }
        return option;
    }
    //to add cart quantity dynamically id & quantity of selected event.target.value was passsed as argument to setQuantity function.
    const handleChange = (id, quantity) => {
        dispatch(setQuantity({id, quantity}));
    }

    return (
        <div className='container'>
        {/* products array data was displayed each product with separate cart using map function */}
            {products.map((product, index) => {
                return (
                    <div key={index} className='row bg-secondary-subtle m-3'>
                        <div className='col-12 mt-3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={product.thumbnail} className='thumbnail' />
                                </div>
                                <div className='col-7' >
                                    <h3>{product.title}</h3>
                                    <h6>{product.brand}</h6>
                                    <p>{product.description}</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Discount: {product.discountPercentage}</p>
                                </div>
                                <div className='col-2'>
                                    <select id={product.id} onChange={(event) =>handleChange(event.target.id, event.target.value)}>
                                        {generateOptions(product.stock)}                                    
                                    </select> <span>$ {product.price}</span>
                                    <h5 style={{ color: 'orange' }} className='mt-5'>REMOVE</h5>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-10'>
                                <h5>SUBTOTAL:</h5>
                                <h5>SHIPPING:</h5>
                            </div>
                            <div className='col-2'>
                                <p>{product.price * product.quantity}</p>
                                <p>FREE</p>
                            </div>

                        </div>
                        <hr />
                        <div className='row'>
                            <h5 className='col-10'>TOTAL:</h5>
                            <h5 className='col-2'>{product.price * product.quantity}</h5>
                        </div>
                    </div>
                 )
             })}
        </div>
    )
}

export default Cart