import Image from 'next/image';
export default function Card(params) {
  return (
    <div
      className="inline-flex  row-start-5 col-start-2 w-56  whitespace-nowrap"
      style={{
        minWidth: '96rem',
      }}
    >
      <div className="bg-white w-44 h-52 mr-5 rounded-xl shadow-card flex flex-col items-center justify-center relative mt-10">
        <div className="absolute -top-14">
          <Image src="/food1.png" width="164px" height="164px" />
        </div>
        <h1 className=" font-semibold mt-14 text-center">
          Veggie <br /> tomato Mix
        </h1>
        <p className="text-red-100 font-semibold mt-3">N1,900</p>
      </div>
    </div>
  );
}
