import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props extends React.HTMLProps<HTMLLIElement> {
  children?: ReactNode;
  className?: string;
}

export default function SideNavLink({ children, className }: Props) {
  const LiVariant = {
    visible: {
      opacity: 1,
      y: 0,
      borderBottom: '1px solid white',
    },
    hidden: {
      opacity: 0,
      y: 40,
      borderBottom: '0px solid white',
    },
  };
  return (
    <motion.li
      variants={LiVariant}
      className={
        'pb-4 flex items-center space-x-2 border-b border-white' + className
      }
      whileHover={{
        scale: 1.1,
      }}
      style={{
        maxWidth: '10rem',
      }}
    >
      {children}
    </motion.li>
  );
}
