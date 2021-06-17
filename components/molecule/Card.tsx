import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
      initial="hidden"
      variants={Variant}
      animate="visible"
      className="bg-white w-44 h-52  rounded-xl shadow-card flex flex-col items-center justify-center relative mt-14 mb-20 ml-10"
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
