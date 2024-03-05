import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/userIcon.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const navs = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/career",
    name: "Career",
  },
];

const BottomNav = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    console.log("logOut");
    logout().then().then();
  };

  return (
    <nav className='container mx-auto flex justify-between gap-10 py-5 items-center'>
      <div></div>
      <ul className='flex gap-5'>
        {navs.map((nav) => (
          <li key={nav.id} className='text-[#706F6F]'>
            <NavLink to={nav.path}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
      <div className='flex gap-5'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          {user ? (
            <img
              src={user.photoURL}
              alt='user img'
              className='w-full h-full object-cover'
            />
          ) : (
            <img
              src={userImg}
              alt='user img'
              className='w-full h-full object-cover'
            />
          )}
        </div>
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className='bg-[#403F3F] text-white px-5 py-2 text-[20px] font-semibold'
            >
              logOut
            </button>
          ) : (
            <Link to='/login'>
              {" "}
              <button className='bg-[#403F3F] text-white px-5 py-2 text-[20px] font-semibold'>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
