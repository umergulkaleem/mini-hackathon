import Link from "next/link";
export default function Forms() {
  return (
    <div className="min-h-screen text-white bg-black">
      <div className="pt-10">
        <h1 className=" text-5xl font-semi-bold text-center uppercase">
          Enter Your Details
        </h1>
        <div className="pt-8">
          <form
            className="flex gap-5 justify-center items-center flex-col text-black "
            action="/thankspage"
          >
            <input
              type="Email"
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="password"
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your Password"
              required
            />
            <input
              type="tel"
              maxLength={11}
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your Phone Number"
              required
            />

            <input
              type="text"
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your Address"
              required
            />
            <input
              type="text"
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your City"
              required
            />
            <input
              type="tel"
              maxLength={19}
              className="rounded-2xl p-2 border border-white w-2/8"
              placeholder="Enter Your Card Number"
              required
            />

            <button className="bg-blue-500 py-3 px-8 rounded-lg">
              Place your order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
