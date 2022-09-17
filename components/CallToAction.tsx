import Link from "next/link";
import { Phone } from "phosphor-react";

export const CallToActionNav = () => {
  return (
    <Link href="#kontakt" >
      <div className=" cursor-pointer">
        <a className="hidden w-[11em] items-center  justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow md:flex" aria-label="contact">
          Contact us!
        </a>
        <a className="flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow md:hidden" aria-label="contact">
          <Phone size={32} />
        </a>
      </div>
    </Link>
  );
};

const CallToAction = () => {
  return (
    <Link href="#kontakt">
      <a className="flex w-[11em]  items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow" aria-label="contact">
        Contact
      </a>
    </Link>
  );
};

export default CallToAction;
