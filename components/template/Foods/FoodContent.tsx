import Image from 'next/image';
export default function FoodContent(params) {
  return (
    <div className=" grid grid-cols-12 auto-rows-min">
      <div className="col-span-6 col-start-4  mt-3">
        <Image
          src="/food1.png"
          width="300px"
          height="300px"
          alt="Veggie Tomato Mix"
        />
      </div>
      <div className="col-start-2 col-span-10 ">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">Veggie Tomato Mix</h1>
          <p className="font-semibold text-lg text-primary mt-3">N1,900</p>
        </div>
        <div className="mt-10">
          <h1 className="font-semibold text-lg">Delivery Info</h1>
          <p className="text-gray-500 font-medium">
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </p>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold text-lg">Return Policy</h1>
          <p className="text-gray-500 font-medium">
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </p>
        </div>
      </div>
      <button className="mt-10 col-start-2 col-span-10 py-5 px-10 rounded-full bg-primary text-white font-semibold">
        Add to Cart
      </button>
    </div>
  );
}
