import Nav from '@components/molecule/Nav';
import MainHeader from '@components/template/Main/MainHeader';
import MainContent from '@components/template/Main/MainContent';
import BottomNav from '@components/molecule/BottomNav';
import { motion } from 'framer-motion';

export default function Main() {
  return (
    <div className="max-w-screen-xs min-h-screen border bg-gray-100 mx-auto">
      <motion.div
        exit={{
          translateX: '-100%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 0.15,
        }}
      >
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Nav />
          <MainHeader />
          <MainContent />
          <BottomNav />
        </div>
      </motion.div>
    </div>
  );
}
