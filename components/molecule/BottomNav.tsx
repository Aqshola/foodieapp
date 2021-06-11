import { Home, History, Person, Fav } from '@components/atom/Icon';

export default function BottomNav() {
  return (
    <div className="grid grid-cols-12  justify-between items-center py-5">
      <a href="" className="col-start-2 col-span-1">
        <Home active={true} />
      </a>
      <a href="" className="col-start-6 col-span-2">
        <Fav />
      </a>
      <a href="" className="col-span-2">
        <Person />
      </a>
      <a href="" className="col-span-2">
        <History />
      </a>
    </div>
  );
}
