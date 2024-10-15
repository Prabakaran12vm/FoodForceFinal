import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";



const About = () => {
  return (

<motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
     
    >

    <div className="min-h-screen  text-gray-700 ">
      <div className="p-[60px] ">
        <h1 className="font-extrabold  text-4xl p-3 text-[#ff5200] ">About</h1>
        <p className="py-4 pl-2 text-lg ">
          Welcome to FoodForce, your go-to platform for seamless and convenient
          food delivery! We are passionate about bringing your favorite meals
          from local restaurants right to your doorstep with just a few clicks.
          Whether you're craving a quick bite or planning a feast with friends,
          we make it easy for you to explore diverse cuisines, discover new
          favorites, and enjoy delicious food anytime, anywhere
        </p>
        <div className=" py-5 ">
        <p className=" pl-2 text-lg">
          This website was crafted using modern development tools such as React,
          Redux, Vite, and styled with Tailwind CSS and Daisy UI. These
          technologies empower us to deliver a fast, responsive interface,
          making your food ordering experience not just seamless but also
          visually appealing. Whether you’re in the mood for comfort food or
          looking to explore new cuisines, we’ve made it easy for you to browse
          and order from a wide variety of restaurants.
        </p>
      </div>
      <div className=" py-7 ">
        <p className="pl-2 py-2 absolute text-xl">Feel free to visit my </p>
        <Link to={"https://prabakaran.vercel.app/"} target="_blank">
        
          <button className="ml-[190px]  text-white btn bg-[#ff5200] hover:text-[#ff5200]  ">
            PORTFOLIO{" "}
            <BsArrowUpRightCircle size={20}/>
            {/* <span className="  loading loading-ring loading-lg"></span> */}
          </button>
        </Link>
      </div>
      
      
      </div>
      
    </div>
    </motion.section>
  );
};

export default About;
