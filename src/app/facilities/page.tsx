import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

import {
  FaBuildingColumns,
  FaComputer,
  FaFootball,
  FaRegBuilding,
  FaWifi,
} from "react-icons/fa6";
import { RiBookShelfLine, RiPlantLine } from "react-icons/ri";
import { PiProjectorScreenChartBold, PiStudentBold } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Facilities: React.FC = () => {
  return (
    <main className="p-4 lg:px-8 text-center">
      <TextLine text="Facilities" />

      <ul className="p-2 list-none text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaComputer color="orange" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Computer labs with modern hardware and networking
          </h4>
          The department has four laboratories with total of more than 150
          computers. Computers are equipped with Corei5, Core2Duo and AMD Athlon
          processors. The department also houses two Xeon server
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaWifi color="blue" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            NMEICT 1 Gbps broadband leased line connectivity
          </h4>
          Department is connected to the Ministry of Human Resources
          Development, Govt. of India&apos;s National Mission for Education
          through ICT. Under this scheme total bandwidth available with
          university is 1 Gbps.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <RiBookShelfLine color="yellow" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Rich library with latest books, journals and magazines
          </h4>
          Central Library of the university has more than 1000 titles in
          computing alongwith many other research and development related title.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaChalkboardTeacher color="aqua" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Interactive remote teaching through Virtual Classroom
          </h4>
          The university houses a cutting-edge Ekalavya Virtual Classroom which
          is used to connect departments with experts throughout the world.
          Using this classroom students can be benefited by the expertise of
          faculties and experts around the world virtually.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <PiProjectorScreenChartBold color="pink" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Fully furnished classrooms with mounted projectors
          </h4>
          Most of the department&apos;s classrooms have mounted LCD projectors
          to enable teaching through ICT.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <AiOutlineFundProjectionScreen color="orange" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            In-house project development training
          </h4>
          Every program offered at the department has special focus on the
          in-house project development. Students are guided individually by the
          faculties for the project development.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <PiStudentBold color="teal" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Special curricula on communication skills and personality
            development
          </h4>
          There are special curricula on communication skills and personality
          development to prepare IT professionals of world class.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaRegBuilding color="coral" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Facility of Hostel and mess (University and Government)
          </h4>
          There are four hostels for students. Two is under university and two
          is of Government. University&apos;s &nbsp;
          <span className="underline">
            Hostel fees is Rs.3600 per semester. Mess charge for boys is
            approximately Rs.3200 and girl&apos;s mess charge is Rs.1600 per
            month.
          </span>
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaBuildingColumns color="olive" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Collaboration with Babasaheb Ambedkar Open University, Ahmedabad
          </h4>
          Babasaheb Ambedkar Open University, Ahmedabad offers special courses
          to department&apos;s students for enviornmental and cultural
          awarenesss.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <RiPlantLine color="green" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Lush green 200 acre campus with rich flora
          </h4>
          Ours is a lush green campus with guest house, separate hostels for
          boys and girls and hygenic food court and mess. The campus houses rich
          flora of Kutch desert and it is also home to many birds.
        </li>

        <li className="p-2 main-card rounded-md hover:scale-102 duration-200">
          <FaFootball color="brown" size={30} />
          <h4 className="pb-4 text-xl font-bold">
            Spots Complex and Sports equipements
          </h4>
          Facility of all equipements like Footbal, volleyball, basketball,
          badmintion, table tennis, cricket, etc with it&apos;s respected fields
          in campus.
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
