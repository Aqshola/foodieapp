import { Ham, Cart } from '@components/atom/Icon';

export default function Nav() {
  return (
    <div className="grid grid-cols-12 py-5 pr-4">
      <button className="col-span-1 col-start-2">
        <Ham />
      </button>
      <button className="col-span-1 col-start-12">
        <Cart />
      </button>
    </div>
  );
}
