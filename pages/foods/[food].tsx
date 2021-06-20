import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Food(params) {
  return (
    <motion.div className="max-w-screen-xs min-h-screen bg-gray-100 mx-auto ">
      <div className="grid grid-cols-11 py-5">
        <button className="col-start-2  col-span-1 flex justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="col-start-10 col-span-1 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
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
              All our foods are double checked before leaving our stores so by
              any case you found a broken food please contact our hotline
              immediately.
            </p>
          </div>
        </div>
        <button className="mt-5 col-start-2 col-span-10 py-5 px-10 rounded-full bg-primary text-white font-semibold">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
