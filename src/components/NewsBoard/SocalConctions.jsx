import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Title from "../common/Title";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SocalConctions = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

  return (
    <div>
      <Title title={"Login With"} />
      <div className='space-y-2 py-5'>
        <button
          onClick={signInWithGoogle}
          className='flex gap-2 justify-center border w-full py-2 rounded-md items-center'
        >
          <FcGoogle />
          Login with Google
        </button>
        <button
          onClick={signInWithGitHub}
          className='flex gap-2 justify-center border w-full py-2 rounded-md items-center'
        >
          <FaGithub />
          Login with Github
        </button>
      </div>
      <Title title={"Find Us On"} />
      <div className=' py-5 '>
        <Link
          to='https://www.facebook.com/sumaiya.rimu.313?mibextid=ZbWKwL'
          className='flex gap-2  border w-full py-2 px-5 rounded-md text-[#706F6F]items-center'
        >
          <FaFacebookF />
          Fackbook
        </Link>
        <Link
          to='https://twitter.com/SumaiyRimu'
          className='flex gap-2  border w-full py-2 px-5 rounded-md text-[#706F6F]items-center'
        >
          <FaTwitter />
          Twitter
        </Link>

        <Link
          to='https://www.linkedin.com/in/sumaiya-rimu/'
          className='flex gap-2  border w-full py-2 px-5 rounded-md text-[#706F6F]items-center'
        >
          <FaLinkedinIn />
          LinkedinIn
        </Link>
      </div>
    </div>
  );
};

export default SocalConctions;
