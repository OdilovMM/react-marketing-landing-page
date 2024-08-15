import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/footer-logo.png";
import NewsLetter from "../components/NewsLetter";
import variants from "../utils/variants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={variants("bottom", 0.2)}
      className="max-w-7xl mx-auto sm:px-6 lg:px-8"
    >
      <div className="bg-secondary rounded-t-2xl">
        <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-6 px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <img src={footerLogo} alt="" className="h-8" />
          </div>
          {/* items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#service" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#case" className="text-white hover:text-gray-400">
              Case Studies
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          {/* icons */}
          <div className="flex md:justify-end space-x-4">
            <a href="" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebook className="text-black  hover:text-gray-400" />
            </a>
            <a href="" className="p-1.5 text-black rounded-full bg-white">
              <FaTwitter className="text-black hover:text-gray-400" />
            </a>
            <a href="" className="p-1.5 text-black rounded-full bg-white">
              <FaYoutube className="text-black  hover:text-gray-400" />
            </a>
          </div>
        </div>
        {/* letter form */}
        <NewsLetter />
        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-wrap  text-white md:gap-8 px-4 sm:px-6 py-5">
          <p>© 2024 Marketus. All Rights Reserved.</p>
          <p className="underline underline-offset-4">Privacy Policy</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
