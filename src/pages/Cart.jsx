import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="w-full h-auto flex items-center justify-center mt-4 pt-6">
      {
        cart.length > 0 ?
          (<div className="w-11/12 h-auto flex flex-row gap-3 justify-center items-center px-5">


            <div className="flex flex-col gap-3 h-[200px] ">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

           
              <div className="flex flex-col justify-between gap-y-10 ">

                <div className="flex flex-col justify-start gap-1 ">
                  <div className="text-black-200 font-semibold text-[1rem] ">Your Cart</div>
                  <div className="text-green-600 font-bold text-[2rem]">Summary</div>
                  <p className="text-black-200 font-semibold text-[1rem]">
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-0">
                  <p className="text-black-200 font-semibold text-[1rem]">Total Amount: ${totalAmount}</p>
                  <button className=" w-[25rem] h-[3rem] bg-green-800 text-white font-bold rounded-sm">
                    CheckOut Now
                  </button>
                </div>

              </div>


            



          </div>) :

          (<div className="flex flex-col items-center justify-center w-full h-[500px]">
            <h1 className="text-black-600 font-bold mb-3">Cart Empty</h1>
            <Link to={"/"}>
              <button className=" w-[7rem] h-[3rem] bg-green-600 text-black-600 font-bold rounded-full">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
