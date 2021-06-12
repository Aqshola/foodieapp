import { motion } from 'framer-motion';
type Props = {
  view: boolean;
  setView: () => void;
};

export default function SideNav({ view, setView }: Props) {
  const Variant = {
    visible: { x: 0 },
    hidden: { x: '-100%' },
  };
  return (
    <motion.div
      initial="hidden"
      variants={Variant}
      exit="hidden"
      animate="visible"
      transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
      className="flex px-10 flex-col bg-primary h-full w-full absolute z-20"
    >
      <div className="flex justify-end py-4">
        <button className="text-white" onClick={setView}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={'transition-all ' + (view ? 'py-24' : '')}>
        <li className=" flex flex-col font-medium h-52 justify-between list-none text-white">
          <ul>Profile</ul>
          <ul>Order</ul>
          <ul>Offer</ul>
          <ul>Privacy Policy</ul>
          <ul>Security</ul>
        </li>
      </div>
    </motion.div>
  );
}
