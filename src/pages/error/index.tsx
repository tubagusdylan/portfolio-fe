import { TypeAnimation } from "react-type-animation";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] text-center bg-orange">
      <div className="lg:w-[40%]">
        <div className="my-5 bg-white w-[85%] h-4 rounded-2xl"></div>
        <div className="my-5 bg-white w-[50%] h-4 rounded-2xl"></div>
        <div className="bg-white p-10 rounded-2xl">
          <TypeAnimation
            sequence={["404", 5000, "Sorry", 5000]}
            wrapper="h1"
            cursor={true}
            speed={10}
            repeat={Infinity}
            className="xl:text-[160px] lg:text-[120px] text-[72px] text-orange font-bold"
          />
          <h2 className="text-[20px] font-semibold text-blue">Not Found</h2>
          <p className="text-[16px] font-normal text-grey">The page you are looking for is not available</p>
        </div>
        <div className="my-5 bg-white w-[50%] h-4 rounded-2xl ml-[50%]"></div>
        <div className="my-5 bg-white w-[85%] h-4 rounded-2xl ml-[15%]"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
