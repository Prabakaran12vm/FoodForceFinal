const ResMenuShimmer = () => {
  return (
    <div className="mx-auto min-h-screen">
      {/* res banner */}
      <div className="flex flex-col gap-4 w-[750px] h-auto mx-auto px-10 mt-0 pt-0">
        <div className="skeleton  mx-auto px-10 mt-0 pt-0  rounded-b-full items-center w-[650px] h-[150px] ">
          <h1 className="mx-[100px] h-[50px] w-[350px] skeleton mt-[30px] bg- pt-6"></h1>
          <p className=" ml-[90px] mt-4 skeleton  h-[20px] w-[400px] pt-3  font-light "></p>
          <h2 className="flex pt-3 pl-[250px] gap-1"></h2>
        </div>

        {/* items card */}
      </div>
      {/* items card */}
      <div className="w-7/12 mx-auto  my-4 p-4 mt-6">
        <div className=" w-11/12 mx-auto my-4 p-4 mt-6 pl-[50px] h-[500px] ">
          <div className=" h-[200px] ">
            <div className="h-[200px] w-[20px] ">
              <h2 className="h-[20px]  skeleton w-[350px] ml-[20px] mt-[5px] absolute "></h2>
              <h2 className="h-[20px] skeleton w-[350px] ml-[20px] mt-[35px] absolute "></h2>
              
              <h2 className="h-[80px] skeleton w-[350px] ml-[20px] mt-[60px]  absolute "></h2>
              <div className="ml-[400px]  flex mt-[20px] skeleton h-[144px] w-[156px]"></div>
            </div>
          </div>
          <div className=" h-[200px] ">
            <div className="h-[200px] w-[20px] ">
              <h2 className="h-[20px]  skeleton w-[350px] ml-[20px] mt-[5px] absolute "></h2>
              <h2 className="h-[20px] skeleton w-[350px] ml-[20px] mt-[35px] absolute "></h2>
              <h2 className="h-[80px] skeleton w-[350px] ml-[20px] mt-[60px]  absolute "></h2>
              <div className="ml-[400px]  flex mt-[20px] skeleton h-[144px] w-[156px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuShimmer;
