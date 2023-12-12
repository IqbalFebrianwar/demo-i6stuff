import Link from "next/link";

const profilPage = () => {
  return (
    <div className="w-full font-body mt-24">
      <div className="avatar mx-5 my-5 space-x-2 items-center">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <p className="text-lg font-semibold">Jenny</p>
      </div>

        <div className="w-full space-y-4 px-5">
            <Link href="/keranjang" className="btn normal-case justify-start w-full bg-white text-black">
                Keranjang
            </Link>
            <button className="btn normal-case justify-start w-full bg-white text-black">
                Favorit
            </button>
            <button className="btn normal-case justify-start w-full bg-white text-black">
                Tambah Produk
            </button>
        </div>
    </div>
  );
};
export default profilPage;
