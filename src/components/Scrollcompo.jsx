import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import scrolling from "../assets/scrolling.png"
import gsap from "gsap";

const Scrollcompo = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;

    // Duplicate the content to make seamless looping
    const clone = el.innerHTML;
    el.innerHTML += clone;

    // Get total width
    const totalWidth = el.scrollWidth / 2;

    // Animate continuously
    gsap.to(el, {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 10, // adjust speed here
      repeat: -1, // infinite
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h6 className="pop font-bold text-[25px] text-center leading-[100%] mt-12 md:text-[45px] md:mt-20">
        Associated Companies
      </h6>

      {/* Continuous Scroll */}
      <div ref={scrollRef} className="flex whitespace-nowrap mt-4 md:mt-6">
        <img
          src={scrolling}
          alt="scrolling"
          className="h-[30px] md:h-[50px] md:gap-4"
        />
      </div>
    </div>
  );
};

export default Scrollcompo;
