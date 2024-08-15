import { useState } from "react";
import processSteps from "../utils/processSteps";
import { FaMinus, FaPlus } from "react-icons/fa";
import variants from "../utils/variants.js";
import { motion } from "framer-motion";

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <section className="pt-12 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("left", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Our Working Process</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-1/2">
              Our Proven Digital Marketing Success through Step-by-Step Guide to
              Achieving Your Business Goals
            </p>
          </div>
        </motion.div>
        <div>
          {processSteps.map((process, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              key={index}
              className={`border rounded-md mb-4 overflow-hidden  ${
                openIndex === index
                  ? "border-primary transition-all duration-300"
                  : "border-gray-300 transition-all duration-300"
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                className={`w-full text-left p-4 flex justify-between items-center ${
                  openIndex === index
                    ? "bg-primary transition-all duration-300"
                    : "bg-tertiary transition-all duration-300"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-secondary font-extrabold text-2xl mr-4">
                    {process.id}
                  </span>
                  <h2>{process.question}</h2>
                </div>
                <div className="bg-white text-black  border p-1.5 rounded-full transition-all duration-300">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-primary text-secondary transition-all duration-300">
                  <hr className="mt-0 mb-5 border-black" />
                  <p>{process.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
