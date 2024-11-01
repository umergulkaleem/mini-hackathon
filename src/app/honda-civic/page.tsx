import Link from "next/link";
export default function toyotacorolla() {
  return (
    <div className=" flex justify-center bg-black text-white min-h-screen">
      <div className="">
        <h1 className="font-bold underline flex justify-center mt-2">
          Honda Civic 2024 Price in Pakistan,Images,reviews & Specs
        </h1>
        <div className="flex justify-center mt-5">
          <img src="HondaCivic.jpg" alt="Error" />
        </div>
        <div className="flex justify-between gap-3  mt-8">
          <button className="p-4 bg-blue-700 rounded-md">
            Book a Test Drive
          </button>
          <button className="p-4 bg-blue-700 rounded-md">
            Request Bank Finance
          </button>
          <button className="p-4 bg-blue-700 rounded-md"> Visit Place</button>
          <button className="p-4 bg-blue-700 rounded-md">Car Inspection</button>
        </div>
        <p className="flex justify-center mt-5">Vehicle Description</p>
        <div className="flex justify-center gap-3 mt-4">
          <p>
            {" "}
            <b>Number of Doors:</b> 4
          </p>
          <p>
            <b>Engine:</b> 1800 CC
          </p>
          <p>
            <b>Condition:</b> 9.5/10
          </p>
          <p>
            <b>Driven:</b> 6,100 KM
          </p>
          <p>
            <b>Suspension Type:</b> Soft Suspension
          </p>
        </div>
        <div className="flex gap-3 mt-3 ">
          <p>
            <b>Avg:</b> 12Km per liter
          </p>
          <p>
            <b>Transmission:</b> Automatic
          </p>
          <p>
            <b>Fuel Type:</b> Petrol
          </p>
        </div>
        <div className="flex justify-center text-green-400 mt-4">
          <h1>Rs 60,00,000</h1>
        </div>
        <Link href="/forms">
          <div className="flex justify-center mt-6">
            <button className="bg-blue-700 p-3 rounded-md">Make Payment</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
