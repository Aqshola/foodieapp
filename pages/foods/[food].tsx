import { motion } from 'framer-motion';
import FoodNav from '@components/template/Foods/FoodNav';
import FoodContent from '@components/template/Foods/FoodContent';
export default function Food(params) {
  return (
    <div className="overflow-x-hidden max-w-screen-xs border min-h-screen bg-gray-100 mx-auto ">
      <motion.div
        exit={{ translateX: '-100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 0.15,
        }}
      >
        <FoodNav />
        <FoodContent />
      </motion.div>
    </div>
  );
}
