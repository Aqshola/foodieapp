import LinkBtn from '@components/atom/LinkBtn';
import Card from '@components/molecule/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

export default function MainContent(params) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="grid grid-cols-12 auto-rows-min   mt-10 flex-grow">
      <div className="col-start-2 col-span-10 ">
        <Slider arrows={false} infinite={false} slidesToShow={3.4}>
          <LinkBtn active={true}>Food</LinkBtn>
          <LinkBtn>Drinks</LinkBtn>
          <LinkBtn>Snacks</LinkBtn>
          <LinkBtn>Sauce</LinkBtn>
        </Slider>
      </div>

      <div className=" col-start-1 col-span-12 py-4">
        <Slider arrows={false} infinite={false} slidesToShow={1.6}>
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
}
