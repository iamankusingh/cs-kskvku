import React from "react";
import TextLine from "../TextLine";

// overviev section at homepage
const Hero3 = () => {
  return (
    <section className="py-4 text-center cursor-default">
      <TextLine text="Overview" />

      <ul className="p-6 md:p-8 text-left text-lg/8 list-disc">
        <li>The Department was established in the year 2009.</li>
        <li>The Department offers five different Computer Science programs.</li>
        <li>
          The Department is well equiped with sufficient computers for each
          student.
        </li>
        <li>
          The Universiity campus is spread in 200 accres with lush green
          environment.
        </li>
        <li>
          The University&apos;s library is well equiped with latest books and
          magazines.
        </li>
        <li>The University also provide hostel facility and mess facility.</li>
        <li>
          We provide education and hands on experience in different IT
          companies.
        </li>
      </ul>

      <div className="pl-4 flex items-center gap-4">
        <p>For Admission, visit :</p>
        <a
          href="https://kskvku.ac.in"
          target="_blank"
          className="p-2 border-2 border-primary border-xl rounded-lg hover:bg-primary active:bg-primary duration-300 cursor-pointer"
        >
          KSKVKU
        </a>
      </div>
    </section>
  );
};

export default Hero3;
