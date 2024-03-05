import { useLoaderData } from "react-router-dom";
import NewsDetails from "../components/NewsBoard/NewsDetails";
import SocalConctions from "../components/NewsBoard/SocalConctions";
import BottomNav from "../components/header/BottomNav";

const NewsDeatilsPage = () => {
  const newsDeails = useLoaderData();

  return (
    <>
      <BottomNav />
      <div className='grid grid-cols-4 container mx-auto gap-10 pt-10'>
        <div className='col-span-3'>
          <NewsDetails newsDeails={newsDeails} />
        </div>
        <div className='col-span-1'>
          <SocalConctions />
        </div>
      </div>
    </>
  );
};

export default NewsDeatilsPage;
