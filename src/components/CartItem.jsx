
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col w-full">

      <div className=" flex flex-row gap-5">

        <div  className="h-[220px] w-[220px]">
          <img src={item.image} className="w-full h-full" />
        </div>
        <div className=" flex flex-col justify-start gap-3 h-[220px] w-[400px]">
          <h1 className="text-gray-700 font-semibold text-sm w-60 ">{item.title}</h1>
          <h1 className="text-gray-700 font-">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
         
          <div className="flex flex-row justify-between w-[300px] " >
            <p className="text-green-600 ">{item.price}</p>
            <div className="hover:cursor-pointer"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>
      <div className="w-11/12 h-1 border-black border-b py-4">
      </div>

    </div>
  );
};

export default CartItem;
