import Nav from '@components/molecule/Nav';
import MainHeader from '@components/template/Main/MainHeader';
import MainContent from '@components/template/Main/MainContent';
import BottomNav from '@components/molecule/BottomNav';

export default function Main() {
  return (
    <div className="max-w-screen-xs min-h-screen border bg-gray-100 mx-auto">
      <div className="flex flex-col min-h-screen relative">
        <Nav />
        <MainHeader />
        <MainContent />
        <BottomNav />
      </div>
    </div>
  );
}
