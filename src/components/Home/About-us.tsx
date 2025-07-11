import { features } from "../../config";
import { Title } from "../Title";
import { Achievement } from "./achievement/achievement";

const AboutUs = () => {
  return (
    <>
      <section
        id="about"
        className="relative z-10 bg-[#F6F7FB] pt-[10px] pb-[10px] md:pt[80px] lg:pt-[130px] md:pb-[130px]"
      >
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="flex flex-wrap items-start">
            <div className="relative w-full lg:w-5/12 xl:w-1/2 hidden lg:block">
              <div className="relative">
                <div className="w-full">
                  <img
                    src="/aboutUs/aboutus-1.png"
                    alt="About Main"
                    style={{
                      clipPath: "polygon(0 0, 63% 0, 100% 100%, 0% 100%)",
                    }}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 transform">
                  <img
                    src="/aboutUs/aboutus-2.png"
                    alt="About Circle"
                    className="h-[360px] w-[360px] rounded-full border-[12px] border-white object-cover max-sm:h-[160px] max-sm:w-[160px]"
                  />
                </div>
                <div
                  style={{ clipPath: "polygon(0 1%, 0% 100%, 100% 100%)" }}
                  className="absolute bottom-[-20px] left-[-20px] z-[-1] h-[208px] w-[208px] bg-green-500"
                />
              </div>
            </div>

            <div className="mt-[50px] w-full p-3 pt-[25px] lg:mt-0 lg:w-7/12 lg:pl-[60px] xl:w-1/2">
              <div className="mb-[25px]">
                <Title> — About Us</Title>
                <h2 className="mt-2 text-[32px] leading-tight font-bold text-gray-800 md:text-[36px]">
                  Crafting Digital Experiences That Matter
                </h2>
              </div>
              <p className="mb-[20px] text-[18px] font-medium text-[#2c3941]">
                We turn ideas into high-performing websites and web applications
                that help businesses thrive in the digital world. Whether you're
                launching a startup, scaling an enterprise, or transforming your
                brand online — we&apos;ve got the skills to bring your vision to
                life.
              </p>
              <p className="mb-[20px] text-[18px] font-medium text-gray-700">
                From intuitive UI/UX design to robust backend architecture, we
                deliver fast, secure, and scalable solutions built with the
                latest technologies. Our team is passionate about clean code,
                thoughtful design, and real-world impact.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:pt-20 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Achievement />
    </>
  );
};

export { AboutUs };
