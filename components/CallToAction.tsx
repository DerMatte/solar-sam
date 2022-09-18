import Link from "next/link";
import { Phone } from "phosphor-react";

export const CallToActionNav = () => {
  return (
    <Link href="#kontakt">
      <div className=" cursor-pointer">
        <a
          className="hover:bg-yellow hidden w-[8em]  items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white md:flex"
          aria-label="contact"
        >
          Contact us!
        </a>
        <a
          className="hover:bg-yellow flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white md:hidden"
          aria-label="contact"
        >
          <Phone size={32} />
        </a>
      </div>
    </Link>
  );
};

const CallToAction = () => {
  return (
    <Link href="#kontakt">
      <a
        className="hover:bg-yellow flex  w-[11em] items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white"
        aria-label="contact"
      >
        Contact
      </a>
    </Link>
  );
};

export default CallToAction;
