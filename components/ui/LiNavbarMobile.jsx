import Link from "next/link";
import { useRouter } from "next/router";

const LiNavbarMobile = ({ customPath, tNav }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <li
      className={
        path === customPath
          ? "p-4 text-4xl text-[#f37032] underline"
          : "p-4 text-4xl"
      }
    >
      <Link href={customPath}>{tNav}</Link>
    </li>
  );
};

export default LiNavbarMobile;
