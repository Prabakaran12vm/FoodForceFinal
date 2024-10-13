import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { IoIosStar } from "react-icons/io";


const ItemCard = ({ itemCard, handleAddItem, pathname }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div
        data-testid='foodItems'
        className='p-2 m-2 border-b-2 min-h-[200px] border-gray-200 text-left flex justify-between'
      >
        <div className='w-9/12 pb-5'>
          <div className='py-2'>
            <span className='font-bold text-slate-700'>
              {itemCard?.card?.info?.name}
            </span>
            <span className='text-slate-700 flex font-medium'>
              {' '}
               ₹{''}
              {itemCard?.card?.info?.defaultPrice
                ? itemCard?.card?.info?.defaultPrice / 100
                : itemCard.card.info.price / 100}
            </span>
            {!itemCard.card.info.ratings.aggregatedRating.rating ? (
              <></>
            ) : (
              <span className='flex pt-3 bg--600'>
                <span className='pt-[.25]'>
                  <IoIosStar size={14} color='#165b42' />
                </span>
                <span className='pl-[2px] pb-2 text-xs font-bold text-[#165b42]'>
                  {itemCard.card.info.ratings.aggregatedRating.rating}
                </span>
              </span>
            )}
          </div>
          <span className='text-sm text-gray-500 text-wrap'>
            {isExpanded
              ? itemCard?.card?.info?.description
              : itemCard?.card?.info?.description?.slice(0, 120)}{' '}
            {itemCard?.card?.info?.description?.length > 120 && (
              <button onClick={toggleDescription} className='text-gray-600 font-extrabold pl-1'>
                {!isExpanded && 'more...'}
              </button>
            )}
          </span>
        </div>
        <div className='w-4/12 p-2'>
          <div>
            {pathname === '/cart' ? (
              <></>
            ) : (
              <button
                className=' font-bold mt-[120px] hover:bg-gray-100 absolute p-2 w-28 ml-[40px] text-green-600 bg-white rounded-lg shadow-lg'
                onClick={() => handleAddItem(itemCard)}
              >
                ADD
              </button>
            )}
            <img
              className='ml-5 rounded-2xl min-h-[130px] min-w-[130px] max-h-[144px] max-w-[156px]'
              src={`${CDN_URL}${itemCard.card.info.imageId}`}
            />
          </div>
        </div>
      </div>
    );
  };

  export default ItemCard;