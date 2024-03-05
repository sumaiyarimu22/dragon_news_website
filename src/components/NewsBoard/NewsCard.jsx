import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className='w-full shadow-md rounded-md'>
      {/* card top */}
      <div className='flex justify-between items-center bg-[#F3F3F3] p-5'>
        {/* user */}
        <div className='flex gap-5'>
          {/* user img */}
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img
              src={news.author.img}
              alt={news.author.name}
              className='w-full h-full object-cover'
            />
          </div>
          {/* user name */}
          <div>
            <p className='font-semibold'>{news.author.name}</p>
            <p className='text-[#706F6F] text-[14px]'>
              {news.author.published_date}
            </p>
          </div>
        </div>
        {/* bookmar &  share */}
        <div className='flex gap-5 text-[#706F6F] text-2xl'>
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* post */}
      <div className='p-5 space-y-5'>
        <p className='font-bold text-[20px] text-[#403F3F]'>{news.title}</p>
        <div>
          <img src={news.image_url} alt={news.title} />
        </div>
        <div>
          {news.details.length > 200 ? (
            <p className='text-[#706F6F]'>
              {news.details.slice(0, 200)}{" "}
              <Link
                to={`/news/${news.id}`}
                className='text-[#FF8C47] cursor-pointer underline focus:outline-none'
              >
                Read More...
              </Link>
            </p>
          ) : (
            <p>{news.details}</p>
          )}
        </div>
        <hr />
        <div className='flex justify-between items-center'>
          {/* rating */}
          <div className='flex justify-between items-center gap-2'>
            <div className='flex gsp-1 text-[#FF8C47]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p> {news.rating.number}</p>
          </div>
          {/* view */}
          <div className='flex gap-2 items-center'>
            <FaEye /> <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
