import LinkBtn from '@components/atom/LinkBtn';
import Card from '@components/molecule/Card';

export default function MainContent(params) {
  return (
    <div className="grid grid-cols-12 auto-rows-min  space-y-10 mt-10 flex-grow">
      <div className="flex  col-start-2 col-span-10 overflow-x-hidden">
        <LinkBtn active={true}>Food</LinkBtn>
        <LinkBtn>Drinks</LinkBtn>
        <LinkBtn>Snacks</LinkBtn>
        <LinkBtn>Sauce</LinkBtn>
      </div>
      <div className="flex col-start-2 col-span-10">
        <Card />
      </div>
    </div>
  );
}
