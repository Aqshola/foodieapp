import Nav from '@components/molecule/Nav';
import MainHeader from '@components/template/Main/MainHeader';
import MainContent from '@components/template/Main/MainContent';
import BottomNav from '@components/molecule/BottomNav';

export default function Main() {
  return (
    <div className="max-w-screen-sm min-h-screen bg-gray-100 mx-auto">
      <div className="flex flex-col min-h-screen">
        <Nav />
        <MainHeader />
        <MainContent />
        <BottomNav />
      </div>
    </div>
  );
}
