import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: (params: any) => any;
  width?: 'w-full' | 'w-10' | 'w-32';
}

export default function Button({ children, onClick, width = 'w-10' }: Props) {
  return (
    <motion.button
      className="bg-primary py-2 px-10 text-white rounded-full text-sm"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
