import logoInterveted from "../assets/logo-inverted.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import youtube from "../assets/icon-youtube.svg";

const socials = [
  {
    link: "/",
    icon: facebook,
    alt: "facebook",
  },
  {
    link: "/",
    icon: youtube,
    alt: "youtube",
  },
  {
    link: "/",
    icon: twitter,
    alt: "twitter",
  },
  {
    link: "/",
    icon: pinterest,
    alt: "pinterest",
  },
  {
    link: "/",
    icon: instagram,
    alt: "instagram",
  },
];
const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse space-y-12 items-center justify-between md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto text-darkGrayishBlue text-xs text-center my-6 md:hidden">
            <p>Copyright &copy; 2020. All Rights Reserved</p>
          </div>
          <div>
            <img src={logoInterveted} alt={`manage logo`} className="h-8" />
          </div>
          <div className="flex justify-between space-x-4">
            {socials.map((social) => {
              return (
                <a href={social.link}>
                  <img src={social.icon} alt={social.alt} className="h-8" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-veryLightGray">
            <a href="/" className="hover:text-brightRed">
              Home
            </a>
            <a href="/" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="/" className="hover:text-brightRed">
              Products
            </a>
            <a href="/" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-veryLightGray">
            <a href="/" className="hover:text-brightRed">
              Careers
            </a>
            <a href="/" className="hover:text-brightRed">
              Community
            </a>
            <a href="/" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none text-darkBlue bg-veryLightGray"
                placeholder="Updated in your inbox"
              />
              <button class="px-6 py-2 text-veryLightGray rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-darkGrayishBlue md:block text-xs text-right">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
