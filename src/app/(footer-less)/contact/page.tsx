import TextLine from "@/components/TextLine";
import React from "react";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <main className="p-6 lg:px-8 text-center cursor-default">
      <TextLine text="Contact us" />

      <div className="max-w-sm text-left text-xl">
        <h2 className="py-2">
          Address : Department of Computer Science, KSKV Kachchh University,
          Mundra Road, Bhuj-Kachchh, Gujarat - 370001
        </h2>

        <h3 className="py-2">Email :cs@kskvku.edu.in</h3>

        <h3 className="py-2">Phone no : +91 (2832) 235036</h3>
      </div>

      <div className="max-w-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.7070160438977!2d69.6554062194201!3d23.212935752024833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e31a652eb17%3A0x129c4d76d467c3cb!2sDepartment%20Of%20Computer%20Science!5e0!3m2!1sen!2sin!4v1746542029659!5m2!1sen!2sin"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* icons */}
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
    </main>
  );
};

export default Contact;
