import Image from "next/future/image";
import { useState, useEffect } from "react";
import cn from "classnames";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 0,
      name: "John One",
      company: "CEO, Uranus",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      text: "NULL. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: true,
    },
    {
      id: 1,
      name: "Jane Schmoe",
      company: "CEO, Pluto",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      text: "EINS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
    {
      id: 2,
      name: "John Three",
      company: "CEO, Jupiter",
      image:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      text: "Zwei. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
    {
      id: 3,
      name: "Jane Four",
      company: "CEO, Gaia",
      image:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      text: "Drei. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const rotateTestimonial = (PrevOrNext: "prev" | "next") => {
    if (PrevOrNext == "prev") {
      if (currentTestimonial === 0) {
        setCurrentTestimonial(testimonials.length - 1);
      } else {
        setCurrentTestimonial(currentTestimonial - 1);
      }
    } else if (PrevOrNext === "next") {
      if (currentTestimonial < testimonials.length - 1) {
        setCurrentTestimonial(currentTestimonial + 1);
      } else {
        setCurrentTestimonial(0);
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      rotateTestimonial("next");
    }, 10000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section className="container mx-auto h-full min-h-[60vh] w-full px-8 mb-24">
      <h3 className="pb-8 text-xl font-semibold md:text-2xl">
        What our clients say
      </h3>
      <div className="mx-auto flex h-full flex-col items-center justify-between">
        {/* <span className="absolute top-5 font-display text-4xl">{`"`}</span> */}
        <div className="flex h-full w-3/4 md:w-1/2 flex-row items-center justify-around">
          <button
            className="h-64 rounded py-12  px-6 text-2xl font-bold text-black/50 hover:text-black md:text-4xl"
            onClick={() => {
              rotateTestimonial("prev");
            }}
          >
            {"<"}
          </button>
          {/* diplay testimonial only if the testimonial id equals currentTestimonial  */}
          {testimonials
            .filter((testimonial) => testimonial.id === currentTestimonial)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="mx-auto flex w-screen min-w-full max-w-xl flex-col items-center justify-around pt-16 ease-in-out duration-100 transition-all "
              >
                <Image
                  src={testimonial.image}
                  alt="Portrait"
                  width={128}
                  height={128}
                  className="mx-auto h-32 min-h-fit w-32 min-w-fit rounded-full object-cover"
                />
                <p className="min-w-[40vw] pt-8 sm:min-w-0">
                  {testimonial.text}
                </p>
                <h3 className="pt-4 ">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          <button
            className="h-64 rounded py-12  px-6 text-2xl font-bold text-black/50 hover:text-black md:text-4xl"
            onClick={() => {
              rotateTestimonial("next");
            }}
          >
            {">"}
          </button>
        </div>
        <div className="flex h-full flex-row items-center justify-center space-x-2 pt-8">
          {testimonials.map((testimonial) => (
            <span
              key={testimonial.id}
              className={cn(
                "h-2 w-2 cursor-pointer rounded-full bg-black/25",
                currentTestimonial == testimonial.id && "bg-black/75"
              )}
              onClick={() => {
                setCurrentTestimonial(testimonial.id);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
