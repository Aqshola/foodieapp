import MobileNav from '@components/molecule/MobileNav';
import DeliverContent from '@components/template/Deliver/DeliverContent';

export default function Delivery(params) {
  return (
    <div className="max-w-screen-xs mx-auto bg-gray-100 min-h-screen">
      <MobileNav title="Checkout" />
      <DeliverContent />
    </div>
  );
}
