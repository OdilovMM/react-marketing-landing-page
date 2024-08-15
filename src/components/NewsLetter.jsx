const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-8 px-4 lg:px-8 gap-8">
        <div className="flex-1 space-y-4">
          <button className="bg-primary text-black px-6 py-2 rounded-md font-medium">
            Contact
          </button>
          <div className="text-white space-y-2">
            <p>
              <strong>Email:</strong> support@market.com
            </p>
            <p>
              <strong>Cellphone:</strong> +99890 000 00 00
            </p>
            <p>
              <strong>Address:</strong> 1234 Example St, City, Country
            </p>
          </div>
        </div>
        <div>
          <form className="flex-1 bg-[#292A32] justify-center items-center p-8 rounded-none gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">
              Apply 
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
