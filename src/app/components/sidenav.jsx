import Link from "next/link";

const SIdeNav = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu space-y-5 font-body p-4 w-80 min-h-full bg-white text-base-content">
        <li>
          <Link href="/profil" className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="text-lg">Hai, Jenny</p>
          </Link>
        </li>
        <li>
          <Link href="/keranjang" className="text-xl">
            Keranjang
          </Link>
        </li>
        <li>
          <Link href="" className="text-xl">
            Favorit
          </Link>
        </li>
        <li>
          <Link href="" className="text-xl">
            Pria
          </Link>
        </li>
        <li>
          <Link href="" className="text-xl">
            Wanita
          </Link>
        </li>
        <li>
          <button
            href=""
            className="bg-black text-white font-bold justify-center text-xl"
          >
            Daftar
          </button>
        </li>
        <li>
          <button
            href=""
            className="bg-white text-black border border-black font-bold justify-center text-xl"
          >
            Masuk
          </button>
        </li>
      </ul>
    </div>
  );
};
export default SIdeNav;
