import Link from "next/link";
import Layout from "../components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from "next/future/image";

import HeroSmall from "../public/img/Hero.png";
import HeroBig from "../public/img/Steve-Thomas-and-solar-panels.webp";
import SolarImg from "../public/img/photo-solar.webp";
import Portrait from "../public/img/portrait.jpg";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Testimonials from "components/Testimonials";

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <section className="hero container mx-auto flex w-screen flex-col items-center justify-around px-8 md:hidden md:flex-row">
        <h1 className="relative z-50 text-4xl font-bold md:z-0 md:order-2 md:text-5xl">
          Solar Sam <br />
          Electrician
        </h1>
        <Image
          src={HeroSmall}
          alt="Hero"
          priority={true}
          width="auto"
          height="auto"
          className="-mt-4 rounded-md object-cover md:order-1"
        />
        <div className="-mt-4 flex w-64 items-center justify-around md:order-4 md:mt-0">
          <Link href="#">
            <a className="flex w-28 items-center justify-center rounded-md bg-[#696969] px-4 py-2 font-medium text-white hover:bg-blue-600">
              Our Work
            </a>
          </Link>
          <Link href="#">
            <a className="flex w-24 items-center justify-center rounded-md bg-[#696969] px-4 py-2 font-medium text-white hover:bg-blue-600">
              Contact
            </a>
          </Link>
        </div>
        <p className="pt-12 leading-6 md:order-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu
          odio duis. Diam sit massa, sit gravida pharetra mollis dignissim
          sollicitudin. Purus, quis convallis aliquet ultricies.
        </p>
      </section>
      {/* Desktop Hero */}
      <section className="hero container mx-auto hidden w-screen flex-col items-center justify-between space-x-8 px-8 pt-16 pb-24 md:flex md:flex-row xl:justify-around ">
        <Image
          src={HeroBig}
          alt="Hero"
          priority={true}
          width="auto"
          height="auto"
          className="rounded-md object-cover md:mt-0"
        />
        <div className="flex flex-col">
          <h1 className="relative text-4xl font-bold md:z-0  md:text-5xl">
            Solar Sam <br />
            Electrician
          </h1>

          <p className="max-w-lg pt-12 pb-8 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu
            odio duis. Diam sit massa, sit gravida pharetra mollis dignissim
            sollicitudin. Purus, quis convallis aliquet ultricies.
          </p>
          <div className="flex w-64 items-center justify-between">
            <Link href="#">
              <a className="flex w-28 items-center justify-center rounded-md bg-[#696969] px-4 py-2 font-medium text-white hover:bg-blue-600">
                Our Work
              </a>
            </Link>
            <Link href="#">
              <a className="flex w-24 items-center justify-center rounded-md bg-[#696969] px-4 py-2 font-medium text-white hover:bg-blue-600">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features container mx-auto flex w-screen flex-row items-center justify-around space-x-4 px-8 pt-16">
      <div className="flex flex-col justify-center md:items-center">
        <div className="h-16 w-16 rounded-md bg-zinc-400"></div>
        <h3 className="pt-2">Safety engineering</h3>
      </div>
      <div className="flex flex-col justify-center md:items-center">
        <div className="h-16 w-16 rounded-md bg-zinc-400"></div>
        <h3 className="pt-2">Solar installations</h3>
      </div>
      <div className="flex flex-col justify-center md:items-center">
        <div className="h-16 w-16 rounded-md bg-zinc-400"></div>
        <h3 className="pt-2">Energy storage</h3>
      </div>
    </section>
  );
};

const ProjectsSection = () => (
  <section className="container mx-auto flex flex-col px-8 py-24">
    <h2 className="pb-8 text-2xl font-bold">Projects</h2>
    <div className="flex flex-col space-y-8">
      <div className="flex flex-row">
        <Image
          src={SolarImg}
          alt="Project 1"
          className="h-96 w-1/2 flex-1 object-cover object-left "
        />
        <div className="ml-8 flex flex-1 flex-col">
          <h3 className="pb-4 text-xl font-bold ">Project 1</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            doloribus iste tenetur nemo, porro magnam voluptate beatae libero
            accusamus et, suscipit corporis fugit hic explicabo id, quisquam
            dignissimos reprehenderit.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Image
          src={SolarImg}
          alt="Project 1"
          className="h-96 w-1/2 flex-1 object-cover object-left "
        />
        <div className="mr-8 flex flex-1 flex-col">
          <h3 className="pb-4 text-xl font-bold ">Project 2</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            doloribus iste tenetur nemo, porro magnam voluptate beatae libero
            accusamus et, suscipit corporis fugit hic explicabo id, quisquam
            dignissimos reprehenderit.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <Image
          src={SolarImg}
          alt="Project 1"
          className="h-96 w-1/2 flex-1 object-cover object-left "
        />
        <div className="ml-8 flex flex-1 flex-col">
          <h3 className="pb-4 text-xl font-bold ">Project 3</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            doloribus iste tenetur nemo, porro magnam voluptate beatae libero
            accusamus et, suscipit corporis fugit hic explicabo id, quisquam
            dignissimos reprehenderit.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// const TestimonialsSection = () => {
//   const TestimonialData = [
//     {
//       id: 1,
//       name: "John One",
//       company: "CEO, Uranus",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
//       text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac
//               nibh id arcu odio duis. Diam sit massa, sit gravida pharetra
//               mollis dignissim sollicitudin. Purus, quis convallis aliquet
//               ultricies.`,
//     },
//     {
//       id: 2,
//       name: "John Two",
//       company: "CEO, Jupiter",
//       image:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
//       text: "Lorem ipsum dolor sit amet.",
//     },
//     {
//       id: 3,
//       name: "John Three",
//       company: "CEO, Gaia",
//       image:
//         "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
//       text: "Lorem ipsum dolor sit amet.",
//     },
//   ];
//   return (
//     <>
//       <Carousel
//         showArrows={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         showStatus={false}
//         // autoPlay={true}
//         // interval={6100}
//         className="testimonials pt-16 pb-24"
//       >
//         {TestimonialData.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className="relative mx-auto flex w-screen max-w-xl flex-col items-center justify-center"
//           >
//             <Image
//               src={testimonial.image}
//               alt="Portrait"
//               className="mx-auto h-32 w-32 rounded-full object-cover "
//             />
//             <p className="pt-8">{testimonial.text}</p>
//             <h3 className="pt-4 ">{testimonial.name} </h3>
//             <p className="text-gray-500">{testimonial.company}</p>
//           </div>
//         ))}
//       </Carousel>
//       <section className="testimonials mx-auto flex w-screen max-w-xl flex-col items-center justify-around px-8 pt-16 pb-24">
//         <Image
//           src={Portrait}
//           alt="Portrait"
//           className="mx-auto h-32 w-32 rounded-full object-cover"
//         />
//         <p className="pt-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
//           mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu
//           odio duis. Diam sit massa, sit gravida pharetra mollis dignissim
//           sollicitudin. Purus, quis convallis aliquet ultricies.
//         </p>
//         <h3 className="pt-4 ">John Doe</h3>
//         <p className="text-gray-500">CEO, Company</p>
//       </section>
//     </>
//   );
// };

const BlogSection = () => {
  return (
    <section className="blog mx-auto flex w-screen max-w-xl flex-col items-center justify-around px-8 pt-16 pb-24">
      Blog
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="contact flex w-screen flex-col bg-blue-500 px-8 pt-16 pb-24">
      <div className="container mx-auto">
        <h2 className="pb-8 text-2xl font-bold">Contact</h2>

        <div className="h-64 w-1/2 bg-blue-300" />
        <div className="flex flex-col pt-24">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <Link href="tel:7777777 ">
                <a className="pb-8 md:px-8">
                  <span className="">Tel:</span> 7777777
                </a>
              </Link>
              <Link href="mailto:hey@example.com ">
                <a className="pb-8  md:px-8">
                  <span className="">Email:</span> hey@example.com
                </a>
              </Link>
            </div>
            <span className="whitespace-pre-line">
              Address: <br />
              <br />
              15 Montpelier Terrace, <br />
              Brighton BN1 3DS, <br />
              United Kingdom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => (
  <footer className="footer container mx-auto px-8 pt-16 pb-24">
    <div className="flex flex-col justify-center md:flex-row md:justify-between ">
      <div className="pb-8">
        <Image
          src={HeroSmall}
          alt="Logo"
          width="auto"
          height="auto"
          className="h-24 w-24 object-cover"
        />
        <p className="pt-4">&copy; {new Date().getFullYear()} SolarSam</p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="flex flex-col space-y-4 ">
          <div className="font-semibold ">Services</div>
          <Link href="/services/home-automation">
            <a>Home Automation</a>
          </Link>
          <Link href="/services/photovoltaic">
            <a>Photovoltaic</a>
          </Link>
          <Link href="/services/energy-storage">
            <a>Energy Storage</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="font-semibold">Projects</div>
          <Link href="/projects/">
            <a>Project 1</a>
          </Link>
          <Link href="/projects/">
            <a>Project 2</a>
          </Link>
          <Link href="/projects/">
            <a>Project 3</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="font-semibold">Blog</div>
          <Link href="/blog/">
            <a>Blog post 1</a>
          </Link>
          <Link href="/blog/">
            <a>Blog post 2</a>
          </Link>
          <Link href="/blog/">
            <a>Blog post 3</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="font-semibold">Company</div>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/about">
            <a>History</a>
          </Link>
          <Link href="/jobs">
            <a>Jobs</a>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <Layout title="Solar Sam">
    <HeroSection />
    <FeaturesSection />
    <ProjectsSection />
    {/* <TestimonialsSection /> */}
    <Testimonials />
    <ContactSection />
    <FooterSection />
  </Layout>
);

// I always forget how to use this function

// export const getStaticProps: GetStaticProps = async (context) => {

//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default HomePage;
