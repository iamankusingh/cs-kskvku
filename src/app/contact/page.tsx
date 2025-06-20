import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="p-6 lg:px-8 text-center cursor-default">
      <TextLine text="Contact us" />

      <section className="mt-6 lg:flex lg:justify-around">
        <div className="max-w-sm text-left text-xl">
          <h2 className="py-2">
            <span className="font-bold">Address : </span> Department of Computer
            Science, KSKV Kachchh University, Mundra Road, Bhuj-Kachchh, Gujarat
            - 370001
          </h2>
          <h3 className="py-2">Email :cs@kskvku.edu.in</h3>
          <h3 className="py-2">Phone no : +91 (2832) 235036</h3>
        </div>

        <div className="max-w-sm">
          {/* google maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.7070160438977!2d69.6554062194201!3d23.212935752024833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e31a652eb17%3A0x129c4d76d467c3cb!2sDepartment%20Of%20Computer%20Science!5e0!3m2!1sen!2sin!4v1746542029659!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Contact: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Contact;
