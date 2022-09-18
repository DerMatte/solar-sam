import Link from "next/link";
import Layout from "../components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from "next/future/image";

import HeroImg from "../public/img/Hero.png";
import SolarImg from "../public/img/photo-solar.webp";
import Portrait from "../public/img/portrait.jpg";

import { useState, useEffect } from "react";

// TODO: Change Hero Image

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
          src={HeroImg}
          alt="Hero"
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
      <section className="hero container mx-auto hidden w-screen flex-col items-center justify-around space-x-8 px-8 pt-16 pb-24 md:flex md:flex-row ">
        <Image
          src={HeroImg}
          alt="Hero"
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
    </div>
  </section>
);

const TestimonialsSection = () => {
  return (
    <section className="testimonials mx-auto flex w-screen max-w-xl flex-col items-center justify-around px-8 pt-16 pb-24">
      <Image
        src={Portrait}
        alt="Portrait"
        className="mx-auto h-32 w-32 rounded-full object-cover"
      />
      <p className="pt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        mattis malesuada vel ante aliquam nibh sit nullam. Ac nibh id arcu odio
        duis. Diam sit massa, sit gravida pharetra mollis dignissim
        sollicitudin. Purus, quis convallis aliquet ultricies.
      </p>
      <h3 className="pt-4 ">John Doe</h3>
      <p className="text-gray-500">CEO, Company</p>
    </section>
  );
};

const BlogSection = () => {
  return (
    <section className="blog mx-auto flex w-screen max-w-xl flex-col items-center justify-around px-8 pt-16 pb-24">
      Blog
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="contact flex w-screen flex-col items-center justify-around bg-yellow-400 px-8 pt-16 pb-24">
      <div className="h-64 w-1/2 bg-blue-300" />
      <div className="flex flex-col pt-24">
        <h2 className="pb-8 text-2xl font-bold">Contact</h2>
        <div className="flex flex-col space-x-8 md:flex-row">
          <div className="flex flex-col">
            <Link href="tel:7777777 ">
              <a className="pb-8">
                <span className="">Tel:</span> 7777777
              </a>
            </Link>
            <Link href="mailto:hey@example.com ">
              <a className=" pb-8">
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
