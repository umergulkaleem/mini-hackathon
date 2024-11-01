export default function HeroSection() {
  return (
    <div className="text-white ">
      <div className="flex justify-center ">
        <h1 className="font-bold mt-6">
          {" "}
          Sell Your Car on PakWheels and Get the Best Price{" "}
        </h1>
      </div>
      <div className=" flex  justify-center gap-2 ml-20 my-20">
        <div>
          <h1 className="font-bold mb-10">Post your Ad on PakWheels</h1>
          <ul>
            <li>Post your Ad for Gree in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
          </ul>
          <button className="p-2 bg-red-600 rounded-xl my-5 px-16 mx-2">
            Post Your Ad
          </button>
        </div>
        <div className="flex items-center">OR</div>
        <div>
          {" "}
          <div className="mx-10">
            <h1 className="font-bold mb-10">Try PakWheels Sell It For Me</h1>
            <ul>
              <li>Dedicated Sales Expert to Sell your Car</li>
              <li>We Bargain for you and share the Best Offer</li>
              <li>We ensure Safe & Secure Transaction</li>
            </ul>
            <button className="p-2 bg-blue-600 rounded-xl my-5 px-12 mx-2">
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
