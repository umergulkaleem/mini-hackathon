import HeroSection from "./components/HeroSection";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* <Forms /> */}
      {/* <Grid /> */}
      <HeroSection />
      <div className="text-white">
        <div className="mx-20">Featured New Cars</div>
        <div className="flex justify-end mx-10">View All New Cars</div>
        <div className="mx-20">
          Popular &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Upcoming &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; Newly Launched
        </div>
        <div className="flex mx-10 gap-3 mt-5">
          <Link href="/toyota-corolla">
            <div className="mx-5">
              <img src="Corolla.jpg" alt="Error" />
              <h1>Toyota Corolla</h1>
              <p className="text-green-500">PKR 59.7 - 75.5lacs</p>
            </div>
          </Link>
          <Link href="/honda-city">
            <div className="mx-5">
              <img src="City.jpg" alt="Error" />
              <h1>Honda City</h1>
              <p className="text-green-500">PKR 46.5 - 58.5 lacs</p>
            </div>
          </Link>
          <Link href="/honda-civic">
            <div className="mx-5">
              <img src="Civic.jpg" alt="Error" />
              <h1>Honda Civic</h1>
              <p className="text-green-500">PKR 86.6 - 99.0lacs</p>
            </div>
          </Link>
          <Link href="/suzuki-alto">
            <div className="mx-5">
              <img src="Alto.png" alt="Error" />
              <h1>Suzuki Alto</h1>
              <p className="text-green-500">PKR 23.3 - 30.5lacs</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
