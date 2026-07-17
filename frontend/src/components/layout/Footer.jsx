import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-blue-400">
              CitizenConnect
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              A modern digital complaint management platform connecting
              citizens with government departments for faster and more
              transparent governance.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Platform
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                FAQs
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Support
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              <Social icon={<FaFacebookF />} />
              <Social icon={<FaInstagram />} />
              <Social icon={<FaLinkedinIn />} />
              <Social icon={<FaGithub />} />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-center md:text-left">
            © 2026 CitizenConnect. All Rights Reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0 text-center">
            Designed & Developed by <span className="text-blue-400 font-semibold">Abhinav Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon }) {
  return (
    <button
      className="
        w-12
        h-12
        rounded-xl
        bg-slate-900
        hover:bg-blue-600
        transition-all
        duration-300
        flex
        items-center
        justify-center
        text-lg
        hover:scale-110
      "
    >
      {icon}
    </button>
  );
}

export default Footer;