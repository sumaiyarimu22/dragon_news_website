import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewsDetails = ({ newsDeails }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full shadow-md rounded-md'>
      {/* post */}
      <div className='p-5 space-y-5'>
        <p className='font-bold text-[20px] text-[#403F3F]'>
          {newsDeails.title}
        </p>
        <div className='w-full'>
          <img
            src={newsDeails.image_url}
            alt={newsDeails.title}
            className='w-full object-cover'
          />
        </div>
        <div>
          <p className='text-[#706F6F]'>{newsDeails.details}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className='flex gap-2 bg-[#D72050] px-4 py-2 items-center text-white'
        >
          <FaLongArrowAltLeft />
          All news in this category
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
