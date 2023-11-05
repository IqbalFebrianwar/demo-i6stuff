import BackgroundLogin from "@/app/images/backgroundlogin.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full grid md:flex justify-center h-screen bg-secondary">
      <div className="">
        <Image width={400} height={200} src={BackgroundLogin} />
      </div>
      <div className="w-full justify-center text-center py-10">
        <p className="py-5 text-sm">
          Massive discounts and Offers when u shope
        </p>
        <div className="grid px-6">
          <button className="btn btn-primary rounded-full">LOGIN</button>
          <button className="btn btn-secondary rounded-full">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
