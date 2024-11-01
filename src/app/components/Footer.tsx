import Link from "next/link";
export default function Footer() {
  return (
    <div className="">
      <div className=" flex bg-black text-orange-500  justify-center h-max">
        Made By &nbsp;
        <Link
          href="https://www.linkedin.com/in/umergul-kaleem-10b507243/"
          target="-base"
        >
          Umer Gul
        </Link>
      </div>
    </div>
  );
}
