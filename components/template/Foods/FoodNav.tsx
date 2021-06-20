import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function FoodNav() {
  const [heart, setheart] = useState(false);
  const router = useRouter();
  return (
    <div className="grid grid-cols-11 py-5">
      <motion.button
        whileTap={{ scale: 0.5 }}
        className="col-start-2  col-span-1 flex justify-start w-min"
        onClick={() => router.push('/main')}
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
      <motion.button
        className="col-start-10 col-span-1 flex justify-end w-min"
        whileTap={{
          scale: 0.5,
        }}
        onClick={() => setheart(!heart)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            'w-6 h-6 stroke-current  transition-all ' +
            (heart ? 'stroke-0' : 'stroke-2')
          }
          viewBox="0 0 24 24"
          fill={heart ? 'red' : 'none'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </motion.button>
    </div>
  );
}
