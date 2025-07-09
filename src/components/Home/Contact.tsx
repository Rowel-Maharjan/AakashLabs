import React from "react";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactData } from "../../config";
import { Title } from "../Title";
import { formSchema, type FormSchema } from "../../validations/form";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent Successfully! 😃");
        reset();
      } else {
        toast.error("Message Not Sent 😔");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Post API Not Working 😔");
    }
  };
  return (
    <div
      id="contact"
      className="relative flex items-center justify-center overflow-hidden bg-white px-3 py-6 pb-16 md:px-6 md:pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] space-y-16">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Title>— Get In Touch —</Title>
          <h2 className="text-3xl leading-snug font-bold text-black/80 md:text-5xl">
            Don&apos;t Hesited To Conatct With Aakash Lab
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {contactData.map((contact) => (
            <div key={contact.id} className="group relative">
              <div className="relative transform rounded-xl bg-[#0a4c48] p-8 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-300">
                    <contact.icon className="h-10 w-10 text-slate-800" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold duration-300">
                    {contact.title}
                  </h3>
                  <div className="space-y-3 text-slate-200">
                    {contact.content.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="transform cursor-pointer text-lg font-medium duration-300 hover:scale-105"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative w-full">
              <div className="relative flex items-center">
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Your Full Name"
                  className="w-full border-3 border-transparent bg-[#f8f4ef] p-6 pr-14 text-xl text-black placeholder-black transition-colors duration-600 hover:border-[#f8f4ef] hover:bg-white focus:border-[#f8f4ef] focus:bg-white focus:ring-0 focus:outline-none"
                />
                <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-2xl text-[#2c3941]">
                  <User />
                </div>
              </div>
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div className="relative w-full">
              <div className="relative flex items-center">
                <input
                  type="number"
                  onWheel={(e) => e.currentTarget.blur()}
                  {...register("phone", { valueAsNumber: true })}
                  placeholder="Phone Number"
                  className="w-full appearance-none border-3 border-transparent bg-[#f8f4ef] p-6 pr-14 text-xl text-black placeholder-black transition-colors duration-600 hover:border-[#f8f4ef] hover:bg-white focus:border-[#f8f4ef] focus:bg-white focus:ring-0 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />

                <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-2xl text-[#2c3941]">
                  <Phone />
                </div>
              </div>
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <div className="relative flex items-center">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email Address"
                  className="w-full border-2 border-transparent bg-[#f8f4ef] p-6 pr-14 text-xl text-black placeholder-black transition-colors duration-600 hover:border-[#f8f4ef] hover:bg-white focus:border-[#f8f4ef] focus:bg-white focus:ring-0 focus:outline-none"
                />
                <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-2xl text-[#2c3941]">
                  <Mail />
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <textarea
            placeholder="Your Message"
            {...register("message")}
            rows={4}
            className="w-full border-2 border-transparent bg-[#f8f4ef] p-6 pr-14 text-xl text-black placeholder-black transition-colors duration-600 hover:border-[#f8f4ef] hover:bg-white focus:border-[#f8f4ef] focus:bg-white focus:ring-0 focus:outline-none"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-yellow-400 px-6 py-5 font-semibold text-black"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                SEND MESSAGE{" "}
                <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export { Contact };
