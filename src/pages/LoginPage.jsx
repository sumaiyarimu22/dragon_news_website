import { Link } from "react-router-dom";
import BottomNav from "../components/header/BottomNav";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <BottomNav />
      <div className='w-full flex justify-center items-center  h-screen'>
        <div className='w-[35rem] flex flex-col justify-center gap-10 items-center bg-white shadow-md p-10'>
          <h1 className='text-[35px] font-semibold text-[#403F3F]'>
            Login your account
          </h1>
          <hr className='text-[#403F3F] w-full' />
          <div className='w-full'>
            <LoginForm />
          </div>

          <div className='py-4 lg:py-6 flex gap-2'>
            <p className=''>{`don't have an account ?`}</p>
            <Link className='text-[#FF8C47]' to='/register'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
