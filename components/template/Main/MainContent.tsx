import LinkBtn from '@components/atom/LinkBtn';
import Card from '@components/molecule/Card';

export default function MainContent(params) {
  return (
    <div className="grid grid-cols-12 auto-rows-min space-y-10 mt-10 overflow-hidden flex-grow">
      <div className="flex row-start-4 col-start-2 w-96  overflow-hidden">
        <LinkBtn active={true}>Food</LinkBtn>
        <LinkBtn>Drinks</LinkBtn>
        <LinkBtn>Snacks</LinkBtn>
        <LinkBtn>Sauce</LinkBtn>
      </div>
      <div className="flex   row-start-5 col-start-2 w-56">
        <Card />
      </div>
    </div>
  );
}
