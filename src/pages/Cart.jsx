import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../redux/slices/cartSlice";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BsCartXFill } from "react-icons/bs";
import CartShimmer from '../components/skeleton/CartShimmer'


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // function to handle the clear cart
  const handleClearCart = () => {
    // dispath an action
    dispatch(clearCart());
  };
if (!cartItems) return <CartShimmer/>


  return (
    <div className=" text-center m-4 p-4">
      <h1 className="text-2xl font-bold mt-[30px]"></h1>
      <div>
        <div
          tabIndex={0}
          className="card absolute ml-[850px] card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        ></div>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList itemCards={cartItems} />
        {/* cartItems.length === 0 */}
        {!cartItems.length ? (
          <div className="mt-[80px] h-[255px] items-center">
            {/* <h3>Cart is empty, Add items to the cart<h3/>  */}
            <span className="text-xl">Cart is empty, Add items to the cart</span>
            <div className=" "><span className=" flex ml-[270px] my-3  ">
              <BsCartXFill size={60} color="ff5200" />
              <span className="loading loading-ball loading-lg absolute ml-3  bg-[#ff5200] "></span>  
            </span>
            
            </div>
            
          </div>
        ) : (
          <button
            className=" m-2 btn  flex bg-[#ff5200] hover:bg-[#ff3200] text-white "
            onClick={handleClearCart}
          >
            Clear
            <span className="pl-1 pt-[2px]">
              <MdOutlineRemoveShoppingCart size={20} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
