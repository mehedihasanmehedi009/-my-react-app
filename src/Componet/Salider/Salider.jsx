 import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Books to freshen up your bookshelf",
    buttonText: "View The List",
    buttonLink: "/listed-books",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    alt: "Stack of classic books on a wooden desk",
  },
  {
    id: 2,
    title: "Discover stories that inspire your mind",
    buttonText: "Explore Books",
    buttonLink: "/listed-books",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    alt: "Open book with warm aesthetic lighting",
  },
  {
    id: 3,
    title: "Track your reading journey page by page",
    buttonText: "Pages to Read",
    buttonLink: "/pages-to-read",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    alt: "Library bookshelf filled with novels",
  },
];

export const Salider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="max-w-6xl mx-auto px-6 my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#f3f3f3]">
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full shrink-0 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-8 py-12 md:px-20 md:py-16"
            >
              {/* Left Text & Button with entrance animation */}
              <div
                className={`max-w-lg text-center md:text-left transition-all duration-700 ${
                  current === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131313] leading-tight mb-7">
                  {slide.title}
                </h1>
                <Link
                  to={slide.buttonLink}
                  className="inline-block px-6 py-3.5 rounded-lg bg-[#3730a3] hover:bg-[#2e278c] text-white text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-sm no-underline"
                >
                  {slide.buttonText}
                </Link>
              </div>

              {/* Right Book Image with subtle zoom/float animation */}
              <div
                className={`w-full md:w-[44%] flex justify-center transition-all duration-700 ${
                  current === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-72 sm:w-80 md:w-96 h-60 sm:h-68 object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right Arrow Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow cursor-pointer transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow cursor-pointer transition"
        >
          &#10095;
        </button>

        {/* Bottom Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-7 bg-[#3730a3]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};