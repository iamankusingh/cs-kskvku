import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";
import hod from "@/assets/1.jpg";
import Image from "next/image";
import PeopleCard from "@/components/PeopleCard";

const Peoples: React.FC = () => {
  return (
    <main className="p-6 lg:px-8 text-center cursor-default">
      <TextLine text="Peoples" />

      {/* hod */}
      <div className="p-4">
        <Image
          src={hod}
          alt="HOD sir"
          className="h-48 w-auto mx-auto aspect-square rounded-lg"
        />
        <h2 className="pt-2 text-2xl">Dr.Mahesh Mulani</h2>
        <p>(Head of Department)</p>
      </div>

      <div className="md:p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PeopleCard img={hod} name="Manish Dasotiya" role="Lab Admin" />
        <PeopleCard img={hod} name="Parth Thacker" role="Professor" />
        <PeopleCard img={hod} name="Drasti Goswami" role="Professor" />
        <PeopleCard img={hod} name="Rita" role="Professor" />
        <PeopleCard img={hod} name="Sachin Doru" role="Professor" />
        <PeopleCard img={hod} name="Neeraj Macchar" role="Professor" />
        <PeopleCard img={hod} name="Jay Joshi" role="Professor" />
        <PeopleCard img={hod} name="Manish Bhai" role="Peon" />
        <PeopleCard img={hod} name="Khyati Ben" role="Clerk" />
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Peoples: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Peoples;
