import { CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log('resData', resData);
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1 }}
    >
      <div
        data-testid="resCard"
        className="m-4 mt-0 p-4 w-[250px] h-[350px]  rounded-xl border-b-2"
      >
        <img
          className="rounded-xl  w-[273px] h-[182px]"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <h4 className="text-sm text-gray-600">
          {cuisines.join(", ").slice(0, 50)}...
        </h4>
        <span className="absolute mt-[5px]">
          {" "}
          <FaStar  size={15} color="green"/>
        </span>
        <h4 className="text-sm ml-5  text-gray-600 py-1">{avgRating} </h4>

        <div className="absolute">
          <MdDeliveryDining size={18} color="ff5200" />
        </div>
        <h4 className="text-sm text-gray-600 ml-[20px] ">
          {deliveryTime} mins
        </h4>
      </div>
    </motion.div>
  );
};

// higher order component
// input RestaurantCard => output RestaurantCard with speedy label
// export const withSpeedyLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className='absolute bg-black text-white m-2 p-2 rounded-md'>
//           Speedy
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export const withSpeedyLabel = (WrappedComponent) => {
  const SpeedyRestaurantCard = ({ resData }) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Speedy
        </label>
        <WrappedComponent resData={resData} />
      </div>
    );
  };

  return SpeedyRestaurantCard;
};

export default RestaurantCard;
