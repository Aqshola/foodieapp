import Image from 'next/image';
import { motion } from 'framer-motion';
export default function Card(params) {
  const Variant = {
    visible: {
      x: 0,
      scale: 1,
    },
    hidden: {
      scale: 0.7,
      x: '100%',
    },
  };
  return (
    <motion.div
      variants={Variant}
      initial="hidden"
      animate="visible"
      className="bg-white w-44 h-52 mr-5 rounded-xl shadow-card flex flex-col items-center justify-center relative sm:mt-10"
    >
      <div className="absolute -top-14">
        <Image src="/food1.png" width="164px" height="164px" />
      </div>
      <h1 className=" font-semibold mt-20 text-center">
        Veggie <br /> tomato Mix
      </h1>
      <p className="text-red-100 font-semibold mt-3">N1,900</p>
    </motion.div>
  );
}
