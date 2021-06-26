import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
export default function FoodContent(params) {
  const parentWrapper = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const childrenWrapper = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  const buttonWrapper = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  const router = useRouter();

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
      <motion.div
        className="col-start-2 col-span-10 "
        variants={parentWrapper}
        animate="visible"
        initial="hidden"
      >
        <motion.div className="text-center mt-5" variants={childrenWrapper}>
          <h1 className="text-2xl font-semibold">Veggie Tomato Mix</h1>
          <p className="font-semibold text-lg text-primary mt-3">N1,900</p>
        </motion.div>
        <motion.div className="mt-10" variants={childrenWrapper}>
          <h1 className="font-semibold text-lg">Delivery Info</h1>
          <p className="text-gray-500 font-medium">
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </p>
        </motion.div>
        <motion.div className="mt-5" variants={childrenWrapper}>
          <h1 className="font-semibold text-lg">Return Policy</h1>
          <p className="text-gray-500 font-medium">
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </p>
        </motion.div>
      </motion.div>
      <motion.button
        initial="hidden"
        className="mt-10 col-start-2 col-span-10 py-5 px-10 rounded-full bg-primary text-white font-semibold"
        variants={buttonWrapper}
        animate="visible"
        onClick={() => {
          router.push('/checkout/delivery');
        }}
      >
        Add to Cart
      </motion.button>
    </div>
  );
}
