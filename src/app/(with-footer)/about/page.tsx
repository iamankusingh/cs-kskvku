import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const About: React.FC = () => {
  return (
    <main className="p-6 lg:px-8 text-center">
      <TextLine text="About Department" />

      <div className="pt-2 text-lg/8 text-justify cursor-default">
        <p className="py-2">
          Established in 2009, the Department of Computer Science at Krantiguru
          Shyamji Krishna Verma Kachchh University has been a beacon of
          excellence in computing education and research center.
        </p>

        <p className="py-2">
          Initially offering an Integrated Master of Science in Computer
          Applications and IT, the department expanded its academic repertoire
          in 2011 to include the Master of Science in Information Technology
          (M.Sc. IT) and the Postgraduate Diploma in Computer Applications
          (PGDCA).
        </p>

        <p className="py-2">
          After in 2024, department started Batchlor of Science in Computer
          Science (BS in CS), a four year batchlor program bassed on NEP 2023.
        </p>

        <p className="py-2">
          Here, you can pursue Doctor of Philosphy in Computer Science after a
          masters degree.
        </p>

        <p className="py-2">Current Head Of Department is Dr Mahesh Mulani.</p>
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "About: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default About;
