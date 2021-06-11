export default function SideNav(params) {
  return (
    <div className="flex px-10 flex-col bg-primary h-full w-full absolute z-20">
      <div className="py-24">
        <li className=" flex flex-col font-medium h-52 justify-between list-none text-white">
          <ul>Profile</ul>
          <ul>Order</ul>
          <ul>Offer</ul>
          <ul>Privacy Policy</ul>
          <ul>Security</ul>
        </li>
      </div>
    </div>
  );
}
