export default function Main() {
  return (
    <div className="max-w-screen-sm min-h-screen bg-gray-100 mx-auto">
      <div className="flex flex-col h-screen border">
        <div className="grid grid-cols-12 py-5">
          <button className="col-span-1 col-start-2">Nav</button>
          <button className="col-span-1 col-start-11">Market</button>
        </div>
        <div className="grid grid-cols-12 auto-rows-min space-y-10 mt-10 overflow-hidden flex-grow">
          <h1 className="row-span-1 row-start-1 col-start-2 col-span-3 border">
            Delicious food for you
          </h1>
          <div className="flex row-span-1 row-start-2 col-start-2 border">
            <div>logo</div>
            <input type="text" placeholder="search" />
          </div>
          <div className="flex row-start-4 col-start-2 w-96  overflow-hidden border">
            <p className="mr-10">Foods</p>
            <p className="mr-10">Drinks</p>
            <p className="mr-10">Snacks</p>
            <p className="mr-10">Sauce</p>
            <p className="mr-10">Sauce</p>
            <p className="mr-10">Sauce</p>
          </div>
          <div
            className="inline-flex border row-start-5 col-start-2 w-56 overflow-hidden whitespace-nowrap"
            style={{
              minWidth: '96rem',
            }}
          >
            <div className="block bg-white w-44 h-64 mr-5"></div>
            <div className="block bg-white w-44 h-64 mr-5"></div>
            <div className="block bg-white w-44 h-64 mr-5"></div>
            <div className="block bg-white w-44 h-64 mr-5"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 justify-between py-5">
          <a href="" className="col-start-2 col-span-1">
            Home
          </a>
          <a href="" className="col-start-6 col-span-2">
            Love
          </a>
          <a href="" className="col-span-2">
            People
          </a>
          <a href="" className="col-span-2">
            History
          </a>
        </div>
      </div>
    </div>
  );
}
