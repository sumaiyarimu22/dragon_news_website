import Marquee from "react-fast-marquee";
const NavHeadline = () => {
  return (
    <div className='container mx-auto w-full flex bg-[#F3F3F3] p-3 gsp-3'>
      <div className=' bg-[#D72050] text-white px-4 text-[20px] font-medium py-2'>
        Latest
      </div>
      <Marquee className='mx-3'>
        <p className='font-semibold text-[#403F3F]'>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </p>
      </Marquee>
    </div>
  );
};

export default NavHeadline;
