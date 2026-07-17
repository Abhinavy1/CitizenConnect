import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const companyLinks = [
  "About",
  "Features",
  "Pricing",
  "Blog",
];

const productLinks = [
  "Citizen Portal",
  "Officer Portal",
  "Admin Dashboard",
  "Analytics",
];

const supportLinks = [
  "Help Center",
  "Documentation",
  "Privacy Policy",
  "Terms of Service",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black text-white">

              Citizen
              <span className="text-cyan-400">
                Connect
              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              AI Powered Citizen Complaint
              Management System built for
              transparent, secure and
              modern governance.

            </p>

            <div className="mt-8 flex gap-4">

              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaGithub,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-800
                    text-slate-300
                    transition-all
                    duration-300
                    hover:bg-cyan-500
                    hover:text-white
                  "
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Company

            </h3>

            <div className="mt-6 space-y-4">

              {companyLinks.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-cyan-400"
                >

                  {item}

                </a>

              ))}

            </div>

          </div>

          {/* Platform */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Platform

            </h3>

            <div className="mt-6 space-y-4">

              {productLinks.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-cyan-400"
                >

                  {item}

                </a>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Contact

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-4">

                <Mail
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-400">

                  support@citizenconnect.com

                </span>

              </div>

              <div className="flex items-center gap-4">

                <Phone
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-400">

                  +91 98765 43210

                </span>

              </div>

              <div className="flex items-start gap-4">

                <MapPin
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <span className="leading-7 text-slate-400">

                  Smart Governance Center
                  <br />

                  New Delhi, India

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-slate-500">

              © 2026 CitizenConnect.
              All Rights Reserved.

            </p>

            <div className="flex gap-6">

              {supportLinks.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="text-slate-500 transition hover:text-cyan-400"
                >

                  {item}

                </a>

              ))}

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}