import contImg from "../assets/contact.png";
import variants from "../utils/variants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-black md:w-1/2">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
        </motion.div>
        {/* form */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.2)}
          className="flex flex-col md:flex-row justify-between bg-tertiary rounded-lg md:p-8 p-4"
        >
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              {/* btns */}
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="general"
                  />
                  General Requests
                </label>
                <label className="flex items-center mt-2 md:mt-0">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="support"
                  />
                  Support Requests
                </label>
              </div>

              {/* name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
              {/* text area */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="8"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                ></textarea>
              </div>
              <button className="inline-block px-6 py-3 bg-black font-semibold text-white rounded-md hover:bg-primary hover:text-black transition-all duration-300">
                Submit
              </button>
            </form>
          </div>
          {/* image */}
          <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
            <img
              src={contImg}
              alt=""
              className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
