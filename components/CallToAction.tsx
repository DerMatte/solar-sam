import Link from "next/link";
import { HandWaving } from "phosphor-react";

export const CallToActionNav = () => {
  return (
    <Link href="#kontakt">
      <div className=" cursor-pointer">
        <a
          className="hidden w-[8em] items-center  justify-center rounded-lg bg-[#696969] px-4 py-2 font-medium text-white hover:bg-[#F2C94C] md:flex"
          aria-label="contact"
        >
          Contact
        </a>
        <a
          className="flex items-center justify-center rounded-lg bg-[#696969] px-4 py-2 font-medium text-white hover:bg-[#F2C94C] md:hidden"
          aria-label="contact"
        >
          <HandWaving size={32} />
        </a>
      </div>
    </Link>
  );
};

const CallToAction = () => {
  return (
    <Link href="#kontakt">
      <a
        className="flex w-[11em]  items-center justify-center rounded-lg bg-[#696969] px-4 py-2 font-medium text-white hover:bg-[#F2C94C]"
        aria-label="contact"
      >
        Contact
      </a>
    </Link>
  );
};

export default CallToAction;
