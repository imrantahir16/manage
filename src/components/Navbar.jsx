import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="manage logo" />
        </div>
        <div className="hidden space-x-6 md:flex text-sm lg:text-base text-veryDarkBlue">
          <a href="/" className="hover:text-darkGrayishBlue font-vietnam">
            Pricing
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <div>
          <a
            href="/"
            className="hidden bg-brightRed rounded-full p-3 pt-2 px-6 text-white md:block hover:bg-brightRedLight"
          >
            Get Started
          </a>

          {/* Hamburger */}
          {/* <button className="relative w-6 h-6 cursor-pointer transition-all">
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
