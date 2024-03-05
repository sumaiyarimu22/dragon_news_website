import Category from "../components/NewsBoard/Category";
import NewsList from "../components/NewsBoard/NewsList";
import SocalConctions from "../components/NewsBoard/SocalConctions";
import BottomNav from "../components/header/BottomNav";
import NavHeadline from "../components/header/NavHeadline";
import TopNav from "../components/header/TopNav";

const HomePage = () => {
  return (
    <div>
      <TopNav />
      <NavHeadline />
      <BottomNav />
      <div className='grid grid-cols-4 container mx-auto gap-10 pt-10'>
        <div className='col-span-1'>
          <Category />
        </div>
        <div className='col-span-2'>
          <NewsList />
        </div>
        <div className='col-span-1'>
          <SocalConctions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
