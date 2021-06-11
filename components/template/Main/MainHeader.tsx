import { Search } from '@components/atom/Icon';

export default function MainHeader() {
  return (
    <div className="grid grid-cols-12 auto-rows-min space-y-10 mt-10">
      <h1 className="row-span-1 row-start-1 col-start-2 col-span-5 text-2xl font-bold">
        Delicious <br />
        food for you
      </h1>
      <div className="flex row-span-1 row-start-2 col-span-10 space-x-4 items-center col-start-2  py-3 px-3 rounded-full bg-gray-200 border relative overflow-hidden">
        <label
          htmlFor="searchFood"
          className="absolute w-full border block none opacity-0"
        >
          search food
        </label>
        <div>
          <Search />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent font-bold"
          id="searchFood"
        />
      </div>
    </div>
  );
}
