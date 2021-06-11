import Nav from '@components/molecule/Nav';
import MainHeader from '@components/template/Main/MainHeader';
import MainContent from '@components/template/Main/MainContent';
import BottomNav from '@components/molecule/BottomNav';

export default function Main() {
  return (
    <div className="w-max-w-screen-xs min-h-screen bg-gray-100 mx-auto">
      <div className="flex flex-col min-h-screen">
        <Nav />
        <MainHeader />
        <MainContent />
        <BottomNav />
      </div>
    </div>
  );
}
