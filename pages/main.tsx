export default function Main() {
  return (
    <div className="max-w-screen-sm min-h-screen bg-gray-100 mx-auto">
      <div className="flex flex-col h-screen">
        <div className="grid grid-cols-12 py-5">
          <button className="col-span-1 col-start-2">
            <svg
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.59857 8.33333H13.5M1.59857 1H23.5986M1.59857 15.6667H23.5986"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="col-span-1 col-start-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-12 auto-rows-min space-y-10 mt-10 overflow-hidden flex-grow">
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent font-bold"
              id="searchFood"
            />
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
