import Link from "next/link";
import { FaCodeBranch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      <p className="transition-theme text-color font-ubuntuMono text-lg text-center">
        Designed and Built by Manuel Serafin Bugarin
      </p>
      <Link href="https://github.com/el-ser/elser-website-v2">
        <FaCodeBranch className="cursor-pointer hover:animate-pulse w-6 h-6" />
      </Link>
    </div>
  );
};
export default Footer;
