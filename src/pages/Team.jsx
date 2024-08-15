import { FaLinkedin } from "react-icons/fa";
import teamData from "../utils/tempData";
import { useState } from "react";
import variants from "../utils/variants";
import { motion } from "framer-motion";

const Team = () => {
  const [list, setList] = useState(6);
  const handleList = () => {
    setList((prevCount) => prevCount + 3);
  };

  return (
    <section className="pt-24 pb-12 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Our Team</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-black md:w-1/2">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies.
            </p>
          </div>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.slice(0, list).map((member, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              key={i}
              className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                  <img
                    src={member.image}
                    alt=""
                    className="rounded-full w-32 h-32 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-center">{member.position}</p>
                  </div>
                  <a
                    href="#"
                    className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300"
                  >
                    <FaLinkedin className="size-5" />
                  </a>
                </div>
              </div>

              <div>
                <hr className="my-4 border-secondary" />
                <p className="text-black"> {member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* more btns */}
        {list < teamData.length && (
          <div className="flex justify-end mt-8 w-full">
            <button
              onClick={handleList}
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
            >
              See All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
