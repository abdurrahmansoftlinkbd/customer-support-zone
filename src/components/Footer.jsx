import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold">
              CS — Ticket System
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              CS — Ticket System is a modern customer support and task
              management platform designed to streamline issue tracking, improve
              response times, and enhance team collaboration through an
              intuitive and efficient interface.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Sales</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer">Download Apps</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">Join Us</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Social Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaXTwitter />
                <span>@CS — Ticket System</span>
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaLinkedinIn />
                <span>@CS — Ticket System</span>
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaFacebookF />
                <span>@CS — Ticket System</span>
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaEnvelope />
                <span>support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-10"></div>

        <div className="text-center text-sm text-gray-500">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
