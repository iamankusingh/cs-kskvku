import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Facilities: React.FC = () => {
  return (
    <main className="p-4 lg:px-8 text-center">
      <TextLine text="Facilities" />

      <ul className="p-2 list-disc text-left">
        <h4 className="py-2 text-xl">
          Computer labs with modern hardware and networking
        </h4>
        <li className="pb-4">
          The department has four laboratories with total of more than 150
          computers. Computers are equipped with Corei5, Core2Duo and AMD Athlon
          processors. The department also houses two Xeon server
        </li>

        <h4 className="py-2 text-xl">
          NMEICT 1 Gbps broadband leased line connectivity
        </h4>
        <li className="pb-4">
          Department is connected to the Ministry of Human Resources
          Development, Govt. of India&apos;s National Mission for Education
          through ICT. Under this scheme total bandwidth available with
          university is 1 Gbps.
        </li>

        <h4 className="py-2 text-xl">
          Rich library with latest books, journals and magazines
        </h4>
        <li className="pb-4">
          Central Library of the university has more than 1000 titles in
          computing alongwith many other research and development related title.
        </li>

        <h4 className="py-2 text-xl">
          nteractive remote teaching through Virtual Classroom
        </h4>
        <li className="pb-4">
          The university houses a cutting-edge Ekalavya Virtual Classroom which
          is used to connect departments with experts throughout the world.
          Using this classroom students can be benefited by the expertise of
          faculties and experts around the world virtually.
        </li>

        <h4 className="py-2 text-xl">
          Fully furnished classrooms with mounted projectors
        </h4>
        <li className="pb-4">
          Most of the department&apos;s classrooms have mounted LCD projectors
          to enable teaching through ICT.
        </li>

        <h4 className="py-2 text-xl">In-house project development training</h4>
        <li className="pb-4">
          Every program offered at the department has special focus on the
          in-house project development. Students are guided individually by the
          faculties for the project development.
        </li>

        <h4 className="py-2 text-xl">
          Special curricula on communication skills and personality development
        </h4>
        <li className="pb-4">
          There are special curricula on communication skills and personality
          development to prepare IT professionals of world class.
        </li>

        <h4 className="py-2 text-xl">
          Facility of Hostel and mess (University and Government)
        </h4>
        <li className="pb-4">
          There are four hostels for students. Two is under university and two
          is of Government. University&apos;s &nbsp;
          <span className="underline">
            Hostel fees is Rs.3600 per semester. Mess charge for boys is
            approximately Rs.3,200 and girls mess is Rs.1,600.
          </span>
        </li>

        <h4 className="py-2 text-xl">
          Collaboration with Babasaheb Ambedkar Open University, Ahmedabad
        </h4>
        <li className="pb-4">
          Babasaheb Ambedkar Open University, Ahmedabad offers special courses
          to department&apos;s students for enviornmental and cultural
          awarenesss.
        </li>

        <h4 className="py-2 text-xl">
          Lush green 200 acre campus with rich flora
        </h4>
        <li className="pb-4">
          Ours is a lush green campus with guest house, separate hostels for
          boys and girls and hygenic food court and mess. The campus houses rich
          flora of Kutch desert and it is also home to many birds.
        </li>
      </ul>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Facilities: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Facilities;
