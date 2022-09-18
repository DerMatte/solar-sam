import Link from "next/link";
import Layout from "../components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from "next/future/image";
import SolarImg from "../public/img/photo-solar.webp";
import Portrait from "../public/img/portrait.jpg";
import { useState, useEffect } from "react";


const HeroSection = () => {
  return (
    <>
    <section className="hero container mx-auto w-screen flex justify-around items-center flex-col px-8">
      <h1 className="relative text-4xl md:text-5xl font-bold z-50">Solar Sam <br />
      Electrician
      </h1>
      <Image src="/img/Hero.png" alt="Hero" width={254} height={357} className="-mt-4 rounded-md" />
      <div className="flex w-64 items-center justify-around -mt-4">
        <Link href="#"><a className="bg-[#696969] flex w-28 items-center justify-center rounded-md px-4 py-2 font-medium text-white hover:bg-blue-600">Our Work</a></Link>
        <Link href="#"><a className="bg-[#696969] flex w-24 items-center justify-center rounded-md px-4 py-2 font-medium text-white hover:bg-blue-600">Contact</a></Link>
      </div>
      <p className="pt-12 leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio duis. Diam sit massa, sit gravida pharetra mollis dignissim sollicitudin. Purus, quis convallis aliquet ultricies.
      </p>
    </section>
    </>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features pt-16 container mx-auto w-screen flex justify-around items-center flex-row px-8 space-x-4">
      <div className="flex flex-col justify-center md:items-center">
        	<div className="w-16 h-16 bg-zinc-400 rounded-md"></div>
        	<h3 className="pt-2">Safety engineering</h3>
      </div>
      <div className="flex flex-col justify-center md:items-center">
        	<div className="w-16 h-16 bg-zinc-400 rounded-md"></div>
        	<h3 className="pt-2">Solar installations</h3>
      </div>
      <div className="flex flex-col justify-center md:items-center">
        	<div className="w-16 h-16 bg-zinc-400 rounded-md"></div>
        	<h3 className="pt-2">Energy storage</h3>
      </div>
    </section>
  );
};

// const ProjectsSection = () => {
//   return (
//     <section className="projects pt-16 pb-24 mx-auto w-screen flex justify-around items-start flex-col px-8">
//       <h2 className="text-2xl font-bold">Projects</h2>
//       <div className="flex pt-16 flex-row justify-between items-center">
//         <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover h-96 " />
//         <div className="flex flex-col pl-8 justify-between flex-1 items-start h-full max-w-xl">
//           <h3 className="text-xl pb-4 font-bold">Project 1</h3>
//           <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio duis. Diam sit massa, sit gravida pharetra mollis dignissim sollicitudin. Purus, quis convallis aliquet ultricies.</p>
//         </div>
//       </div>
//       <div className="flex pt-16 flex-row-reverse justify-between items-center w-full">
//         <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover h-96 " />
//         <div className="flex flex-col pr-8 justify-between flex-1 items-start h-full max-w-xl">
//           <h3 className="text-xl pb-4 font-bold">Project 2</h3>
//           <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio duis. Diam sit massa, sit gravida pharetra mollis dignissim sollicitudin. Purus, quis convallis aliquet ultricies.</p>
//         </div>
//       </div>
//       <div className="flex pt-16 flex-row justify-between items-center">
//         <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover object-left h-96 " />
//         <div className="flex flex-col pl-8 just-between flex-1 items-start h-full max-w-xl">
//           <h3 className="text-xl pb-4 font-bold">Project 3</h3>
//           <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio duis. Diam sit massa, sit gravida pharetra mollis dignissim sollicitudin. Purus, quis convallis aliquet ultricies.</p>
//         </div>
//       </div>
//     </section>
//   );
// };
const ProjectsSection = () => (
  <section className="flex flex-col px-8 py-24">
    <h2 className="text-2xl font-bold pb-8">Projects</h2>
    <div className="flex flex-col space-y-8">
    <div className="flex flex-row">
      <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover object-left h-96 w-1/2 " />
      <div className="flex flex-col flex-1 ml-8">
        <h3 className="text-xl pb-4 font-bold ">Project 1</h3>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Natus saepe doloribus iste tenetur nemo, porro magnam voluptate beatae libero accusamus et,
         suscipit corporis fugit hic explicabo id, quisquam dignissimos reprehenderit. 
         </p>
      </div>
    </div>
    <div className="flex flex-row-reverse">
      <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover object-left h-96 w-1/2 " />
      <div className="flex flex-col flex-1 ml-8">
        <h3 className="text-xl pb-4 font-bold ">Project 1</h3>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Natus saepe doloribus iste tenetur nemo, porro magnam voluptate beatae libero accusamus et,
         suscipit corporis fugit hic explicabo id, quisquam dignissimos reprehenderit. 
         </p>
      </div>
    </div>
    <div className="flex flex-row">
      <Image src={SolarImg} alt="Project 1" className="flex-1 object-cover object-left h-96 w-1/2 " />
      <div className="flex flex-col flex-1 ml-8">
        <h3 className="text-xl pb-4 font-bold ">Project 1</h3>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Natus saepe doloribus iste tenetur nemo, porro magnam voluptate beatae libero accusamus et,
         suscipit corporis fugit hic explicabo id, quisquam dignissimos reprehenderit. 
         </p>
      </div>
    </div>
    </div>
    
  </section>
)

const TestimonialsSection = () => {
  return (
    <section className="testimonials pt-16 pb-24 mx-auto w-screen flex justify-around items-center flex-col px-8 max-w-xl">
      <Image src={Portrait} alt="Portrait" className="w-32 h-32 rounded-full mx-auto object-cover" />
      <p className="pt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio duis. Diam sit massa, sit gravida pharetra mollis dignissim sollicitudin. Purus, quis convallis aliquet ultricies.
      </p>
      <h3 className="pt-4 ">John Doe</h3>
      <p className="text-gray-500">CEO, Company</p>
      </section>
  );
};

const BlogSection = () => {
  return (
    <section className="blog pt-16 pb-24 mx-auto w-screen flex justify-around items-center flex-col px-8 max-w-xl">
      Blog
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="contact bg-yellow-400 pt-16 pb-24 w-screen flex justify-around items-center flex-col px-8">
      <div className="w-1/2 h-64 bg-blue-300" />
      <div className="flex flex-col pt-24">
        <h2 className="text-2xl font-bold pb-8">Contact</h2>
        <div className="flex flex-col md:flex-row space-x-8">
          <div className="flex flex-col">
            <Link href="tel:7777777 ">
              <a className="pb-8">
                <span className="">Tel:</span> 7777777</a>
            </Link>
            <Link href="mailto:hey@example.com ">
              <a className=" pb-8">
                <span className="">Email:</span> hey@example.com</a>
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
      
    </section>
  );
};





const HomePage = () => (
  <Layout title="Solar Sam">
    <HeroSection />
    <FeaturesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
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
