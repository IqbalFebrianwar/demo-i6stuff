import Image from "next/image";
import ImageProductSepatu from "@/assets/images/products/productsepatu.jpg"

const CardproductCo =()=>{
    return (
        <div className="w-full flex items-center space-x-5 mt-5">
          <div className="flex space-x-2">
            <Image
              src={ImageProductSepatu}
              width={80}
              alt="Product"
              className="rounded-md"
            />
            <div className="font-body">
              <h1 className="font-bold">Sepatu Sneakers wanita</h1>
              <h1 className="text-sm">1 barang</h1>
              <div className="flex space-x-2 items-center">
                <p className="font-body font-bold">Total Harga :</p>
                <p className="font-body font-bold">Rp.315.000</p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CardproductCo