import IconGoogle from "@/app/images/google.svg"
import IconFacebook from "@/app/images/facebook.svg"
import Image from "next/image";

const SignupPage = () => {
  return (
    <div className="w-full py-28 grid h-screen bg-secondary px-10">
      <div className=" mr-10 justify-between w-full mb-10">
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </div>
      <div>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="input text-black bg-white input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Email"
            className="input text-black bg-white input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Password"
            className="input text-black bg-white input-bordered input-accent w-full max-w-xs"
          />
        </form>
      </div>
      <div className="justify-end mt-3 w-full flex">
        <p className="text-sm">Already have an account?</p>
      </div>
      <button className="btn mt-5 btn-primary">LOGIn</button>
      <div className="w-full justify-center mt-10 flex">
        <p className="text-sm text-white">Or sign up with social media?</p>
      </div>
      <div className="w-full justify-center flex mt-5 space-x-5">
        <Image width={30} height={30} src={IconGoogle} />
        <Image width={30} height={30} src={IconFacebook} />
      </div>
    </div>
  );
};
export default SignupPage;
