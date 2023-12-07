import PopulerImageComponent from "@/assets/images/populerimage.webp";
import dynamic from "next/dynamic";

const BannerComponent = dynamic(() => 
  import("@/app/components/banner"), {ssr : false}
);
const CategoryPriaComponent = dynamic(() =>
  import("@/app/components/categorypria"), {ssr : false}
);
const CategoryWanitaComponent = dynamic(() =>
  import("@/app/components/categorywanita"), {ssr : false}
);
const CardPopulerComponent = dynamic(() =>
  import("@/app/components/cardpopuler"), {ssr : false}
);
const CardProductComponent = dynamic(() =>
  import("@/app/components/cardproduct"), {ssr : false}
);

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <div className="lg:mx-60 mx-5 mt-10">
        <h1 className="lg:text-3xl text-lg font-semibold font-body">
          Belanja pakaian pria
        </h1>
        <CategoryPriaComponent />
        <h1 className="lg:text-3xl text-lg font-semibold mt-7 font-body">
          Belanja pakaian wanita
        </h1>
        <CategoryWanitaComponent />
        <h1 className="mt-14 font-body font-bold text-lg lg:text-3xl">
          Koleksi Produk Terbaru
        </h1>
        <div className="mt-7 lg:px-12 lg:grid lg:grid-cols-2 max-lg:space-y-5">
          {Array.from({ length: 2 }, () => (
            <CardPopulerComponent
              src={PopulerImageComponent}
              alt={"Populer Image"}
              title={"Flannel Erigo"}
              desk={"flanel berkualitas tinggi dan nyaman dipakai"}
            />
          ))}
        </div>
        <div className="grid space-x-2">
          <h1 className="lg:text-3xl text-lg mt-10 font-body font-bold">Semua Produk</h1>
          {Array.from({ length: 5 }, () => (
            <div className="mt-10 space-x-5 lg:max-w-5xl no-scrollbar overflow-x-auto flex">
              {Array.from({ length: 10 }, () => (
                <CardProductComponent />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;