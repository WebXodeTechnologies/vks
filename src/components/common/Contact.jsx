import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        "service_ny0otir",
        "template_s44pfbu",
        formRef.current,
        "kik_fA8L8cdR8JK_G",
      )
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.dismiss(loadingToast);
          toast.error("Failed to send message ❌");
          setLoading(false);
        },
      );
  };

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.h2 className="text-4xl md:text-6xl font-berkshire text-slate-900">
            Contact Us
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* MAP */}
          <div className="relative w-full min-h-112.5 lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              loading="lazy"
              title="Location"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col h-full space-y-8">
            {/* CONTACT INFO */}
            <div className="grid gap-4">
              {[
                {
                  icon: <HiOutlineMapPin />,
                  title: "Location",
                  detail: "Manmangalam, Karur, Tamil Nadu",
                },
                {
                  icon: <HiOutlinePhone />,
                  title: "Phone",
                  detail: "98653 90925",
                },
                {
                  icon: <HiOutlineEnvelope />,
                  title: "Email",
                  detail: "karuppiyasirpi@8969",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col grow space-y-5 bg-slate-50 p-8 rounded-[2.5rem]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-3 border rounded-2xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="mail@example.com"
                  required
                  className="w-full px-5 py-3 border rounded-2xl"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                required
                className="w-full px-5 py-3 border rounded-2xl min-h-32"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-white font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <BsSendFill />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
