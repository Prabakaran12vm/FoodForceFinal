import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../redux/slices/cartSlice";
import { MdDelete } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BsCartXFill } from "react-icons/bs";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // function to handle the clear cart
  const handleClearCart = () => {
    // dispath an action
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <div
          tabIndex={0}
          className="card absolute ml-[850px] card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn bg-[#ff5200] hover:bg-[#ff3200] text-white btn-block">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList itemCards={cartItems} />
        {/* cartItems.length === 0 */}
        {!cartItems.length ? (
          <div className="mt-[100px]  ">
            {/* <h3>Cart is empty, Add items to the cart<h3/>  */}
            <span className="">Cart is empty, Add items to the cart</span>
            <span className="absolute pt-[20px] ">
              <BsCartXFill size={50} />
            </span>
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
