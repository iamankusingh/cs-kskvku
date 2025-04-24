import React from "react";
import TextLine from "../TextLine";

const Hero3 = () => {
  return (
    <section className="py-4 text-center cursor-default">
      <TextLine text="Overview" />

      <ul className="p-6 md:p-8 text-left text-lg/8 list-disc">
        <li>The Department was established in the year 2009.</li>
        <li>The Department offers five different programs/degree.</li>
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
        <li>
          We provide education and hands on experience in different IT
          companies.
        </li>
      </ul>
    </section>
  );
};

export default Hero3;
