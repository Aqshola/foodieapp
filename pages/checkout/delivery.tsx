import { motion } from 'framer-motion';
export default function Delivery(params) {
  return (
    <div className="max-w-screen-xs mx-auto bg-gray-100 min-h-screen">
      <div className="grid grid-cols-11 py-5 items-center">
        <motion.button
          whileTap={{ scale: 0.5 }}
          className="col-start-2  col-span-1 flex justify-start w-min"
        >
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
        </motion.button>
        <h1 className="col-start-6 col-span-4 font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-12 py-5 mt-10 gap-y-10 auto-rows-min">
        <h1 className="col-span-4  text-3xl font-semibold col-start-2">
          Delivery
        </h1>
        <div className="col-start-2 col-span-10">
          <div className="flex ">
            <h2 className="flex-grow font-medium">Address details</h2>
            <button className="text-primary">change</button>
          </div>
          <div className="bg-white w-full rounded-md p-4 mt-4">
            <h1 className="font-medium border-b p-1">Marvis Kparobo</h1>
            <p className="border-b p-1">
              Km 5 refinery road oppsite re public road, effurun, delta state
            </p>
            <p className="p-1">+234 9011039271</p>
          </div>
        </div>
        <div className="col-start-2 col-span-10">
          <div className="flex ">
            <h2 className="flex-grow font-medium">Delivery method</h2>
          </div>
          <div className="bg-white w-full rounded-md p-4 mt-4">
            <div className="flex items-center gap-x-2 border-b pb-4 p-1">
              <input
                type="radio"
                name="Door delivery"
                id="door-delivery"
                className="text-primary"
              />
              <label htmlFor="door-delivery">Door delivery</label>
            </div>
            <div className="flex items-center gap-x-2 pt-5 p-1">
              <input
                type="radio"
                name="Pick up"
                id="pick-up"
                className="text-primary"
              />
              <label htmlFor="pick-up">Pick up</label>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-10 flex items-center">
          <p className="flex-grow">Total</p>
          <p className="font-medium text-lg">23,000</p>
        </div>
        <div className="col-start-2 col-span-10">
          <button className="w-full px-10 py-5 rounded-full text-white font-medium bg-primary text-lg">
            Proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
}
