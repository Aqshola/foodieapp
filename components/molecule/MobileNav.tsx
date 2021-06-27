import { motion } from 'framer-motion';

interface Props {
  title?: String;
}

export default function MobileNav({ title }: Props) {
  return (
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
      <h1 className="col-start-6 col-span-4 font-bold">{title}</h1>
    </div>
  );
}
