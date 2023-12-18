import Link from "next/link";
import { useRouter } from "next/router";


const LiNavbar = ({customPath, textColor, tNav}) => {
    const router = useRouter();
    const path = router.pathname;

  return (
    <li
      className={
        path === customPath
          ? `p-4 text-[#f37032] underline`
          : `p-4 hover:text-[#f37032] text-[${textColor}] group transition-all duration-400 ease-in-out`
      }
    >
      <Link
        className="bg-left-bottom bg-gradient-to-r from-[#f37032] to-[#f37032] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        href={customPath}
      >
        {tNav}
      </Link>
    </li>
  );
};

export default LiNavbar;
