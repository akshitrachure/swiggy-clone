import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    // console.log(cartItems);
    return(
        <div>
            <button className="p-2 rounded-md bg-red-100" onClick={()=>handleClearCart()}>Clear Cart</button>

            <div className="flex" data-testid="fooditems">
                {cartItems.map(item=><FoodItem {...item} key={item.id}/>)} 
            </div>
        </div>

        
        
    )
}

export default Cart;