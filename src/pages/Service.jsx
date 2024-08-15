import { services } from "../utils/service";
import Linkicon from "../assets/link-icon.png";
import variants from "../utils/variants";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("bottom", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-black md:w-2/3">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </motion.div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] ${service.backgroundColor} ${service.textColor}`}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>
                <a
                  href="#"
                  className={`flex items-center gap-4 py-3 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}
                >
                  <img src={Linkicon} alt="" className="size-6 rounded-full" />
                  <span className="text-lg font-md">Learn More</span>
                </a>
              </div>
              {/* image */}
              <div className="md:w-1/2 order-first md:order-last cursor-pointer">
                <img
                  src={service.image}
                  className="w-full object-contain rounded-md mb-4"
                  alt=""
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
