import React from "react";
import { FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { TransitionLink } from "./TransitionLink";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-white cursor-default">
      <div className="mx-auto grid md:grid-cols-2 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>

          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a
                href="https://kskvku.ac.in"
                target="_blank"
                className="hover:underline"
              >
                KSKVKU Site
              </a>
            </li>

            <li>
              <TransitionLink href="/programs" className="hover:underline">
                Career Options
              </TransitionLink>
            </li>

            <li>
              <TransitionLink href="/fees" className="hover:underline">
                Fees Structure
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-3">Address</h3>

          <p className="text-sm text-gray-300">
            Department of Computer Science, KSKV Kachchh University,
            <br />
            Mundra Road, Bhuj-Kachchh, Gujarat - 370001
          </p>
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-center gap-6 mt-8 text-xl">
        <a
          href="https://instagram.com/cs.kskvku/"
          target="_blank"
          aria-label="Instagram"
          className="hover:text-pink-500 duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://youtube.com/@departmentofcomputerscienc3048"
          target="_blank"
          aria-label="YouTube"
          className="hover:text-red-600 duration-300"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="tel:+91(2832)235036"
          target="_blank"
          aria-label="Phone"
          className="hover:text-green-400 duration-300"
        >
          <FaPhoneAlt size={30} />
        </a>
        <a
          href="mailto:cs@kutchuni.edu.in"
          target="_blank"
          aria-label="Email"
          className="hover:text-blue-400 duration-300"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">
        <span>
          &copy; 2025 All Rights Reserved. Department of Computer Science, KSKV
          Kachchh University |{" "}
          <a
            href="https://github.com/iamankusingh"
            target="_blank"
            className="hover:underline"
          >
            Website&apos;s Source Code
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
