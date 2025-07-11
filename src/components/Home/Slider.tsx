import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../../config";
import { PATHNAME } from "../../pathname";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  return (
    <section id="home" className="relative md:h-screen h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-opacity-50 absolute inset-0 bg-black/80" />

          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <div className="max-w-4xl px-4 text-center">
              <h1 className="mb-4 text-5xl font-bold md:text-6xl">
                {slide.title}
              </h1>
              <h2 className="mb-6 text-2xl md:text-3xl">{slide.subtitle}</h2>
              <a href={PATHNAME.contact}>
                <button className="transform cursor-pointer rounded-lg bg-white px-8 py-3 font-semibold text-gray-800 transition-colors hover:scale-105 hover:bg-gray-100">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="bg-opacity-20 hover:bg-opacity-30 absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-black sm:block"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="bg-opacity-20 hover:bg-opacity-30 absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-black sm:block"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export { Slider };
