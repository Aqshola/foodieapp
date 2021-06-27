import Radio from '@components/atom/Radio';
import { motion } from 'framer-motion';
export default function DeliverContent(params) {
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
  return (
    <motion.div
      variants={parentWrapper}
      animate="visible"
      initial="hidden"
      className="grid grid-cols-12 py-5 mt-10 gap-y-10 auto-rows-min"
    >
      <motion.h1
        variants={childrenWrapper}
        className="col-span-4  text-3xl font-semibold col-start-2"
      >
        Delivery
      </motion.h1>
      <motion.div
        variants={childrenWrapper}
        className="col-start-2 col-span-10"
      >
        <div className="flex ">
          <h2 className="flex-grow font-semibold ">Address details</h2>
          <button className="text-primary">change</button>
        </div>
        <div className="bg-white w-full rounded-md p-4 mt-4">
          <h1 className="font-medium border-b p-1 font-semibold">
            Marvis Kparobo
          </h1>
          <p className="border-b p-1">
            Km 5 refinery road oppsite re public road, effurun, delta state
          </p>
          <p className="p-1">+234 9011039271</p>
        </div>
      </motion.div>
      <motion.div
        variants={childrenWrapper}
        className="col-start-2 col-span-10"
      >
        <div className="flex ">
          <h2 className="flex-grow font-semibold">Delivery method</h2>
        </div>
        <div className="bg-white w-full rounded-md p-4 mt-4">
          <div className="flex items-center gap-x-2 border-b pb-4 p-1">
            <Radio label="Door delivery" />
          </div>
          <div className="flex items-center gap-x-2 pt-5 p-1">
            <Radio label="Pick up" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={childrenWrapper}
        className="col-start-2 col-span-10 flex items-center"
      >
        <p className="flex-grow">Total</p>
        <p className="font-semibold text-lg">23,000</p>
      </motion.div>

      <motion.button
        variants={buttonWrapper}
        className="col-start-2 col-span-10 w-full px-10 py-5 rounded-full text-white font-medium bg-primary"
      >
        Proceed to payment
      </motion.button>
    </motion.div>
  );
}
