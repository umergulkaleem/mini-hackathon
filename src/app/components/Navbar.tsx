import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className="flex bg-black text-white justify-between py-0.5 px-3">
        <Link href="/">
          <div>
            <Image
              src="/pakwheelslogo.svg"
              alt="Website Logo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <div>Used Cars</div>
        <div>New Cars</div>
        <div>Bikes</div>
        <div>Auto Store</div>
        <div>Videos</div>
        <div>Forums</div>
        <div>Blog</div>
        <div>More</div>
        <div className=" bg-red-600 p-1.5 rounded-xl ">Post an Ad</div>
      </div>
    </div>
  );
}
