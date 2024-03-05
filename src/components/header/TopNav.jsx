import moment from "moment"; // Import Moment library
import logo from "../../assets/The Dragon News.svg";

const TopNav = () => {
  const currentDate = moment().format("dddd, MMMM Do YYYY");

  return (
    <div className='container mx-auto flex justify-center text-center gap-5 py-7  flex-col items-center'>
      <img src={logo} alt='logo img' />
      <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
      <p className='text-[20px] font-medium text-[#403F3F]'>
        {currentDate}
      </p>{" "}
      {/* Display formatted current date */}
    </div>
  );
};

export default TopNav;
