import { Ham, Cart } from '@components/atom/Icon';
import { useState } from 'react';
import SideNav from './SideNav';
import { AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [viewSide, setviewSide] = useState<boolean>(false);

  const _handleViewSideNav = (): void => {
    setviewSide(!viewSide);
  };

  return (
    <>
      <div className="grid grid-cols-12 py-5 pr-4">
        <button className="col-span-1 col-start-2" onClick={_handleViewSideNav}>
          <Ham />
        </button>
        <button className="col-span-1 col-start-12">
          <Cart />
        </button>
      </div>
      <AnimatePresence>
        {viewSide && <SideNav view={viewSide} setView={_handleViewSideNav} />}
      </AnimatePresence>
    </>
  );
}
