import { motion } from 'framer-motion';
import { Profile, Offer, Policy, Order, Security } from '@components/atom/Icon';
import SideNavLink from '@components/atom/SideNavLink';
type Props = {
  view: boolean;
  setView: () => void;
};

export default function SideNav({ view, setView }: Props) {
  const Variant = {
    visible: { x: 0, transition: { type: 'spring', bounce: 0 } },
    hidden: {
      x: '-100%',
      transition: { delay: 0.5, type: 'spring', bounce: 0 },
    },
  };

  const UlVariant = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      variants={Variant}
      exit="hidden"
      animate="visible"
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
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
              strokeWidth={1}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={'transition-all ' + (view ? 'py-24' : '')}>
        <motion.ul
          variants={UlVariant}
          className=" flex flex-col font-medium h-52 justify-between list-none text-white gap-5"
        >
          <SideNavLink>
            <Profile />
            <p>Profile</p>
          </SideNavLink>
          <SideNavLink>
            <Order />
            <p>Order</p>
          </SideNavLink>
          <SideNavLink>
            <Offer />
            <p>Offer and promo</p>
          </SideNavLink>
          <SideNavLink>
            <Policy />
            <p>Privacy Policy</p>
          </SideNavLink>
          <SideNavLink>
            <Security />
            <p>Security</p>
          </SideNavLink>
        </motion.ul>
      </div>
    </motion.div>
  );
}
