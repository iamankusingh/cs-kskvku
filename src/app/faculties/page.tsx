import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";
import image from "@/assets/person.png";
import Image from "next/image";
import PeopleCard from "@/components/PeopleCard";

const Faculties: React.FC = () => {
  return (
    <main className="p-6 lg:px-8 text-center cursor-default">
      <TextLine text="Faculties" />

      {/* hod sir */}
      <div className="p-4">
        <Image
          src={image}
          alt="HOD sir"
          className="h-48 w-auto mx-auto aspect-square rounded-lg"
        />
        <h2 className="pt-2 text-2xl">Dr.Mahesh Mulani</h2>
        <p>(Head of Department)</p>
      </div>

      {/* rest of faculties */}
      <div className="md:p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PeopleCard
          img={image}
          name="Mr. Manish L. Dasotiya"
          role="Programmer"
        />
        <PeopleCard img={image} name="Mr. Jay M. Joshi" role="Programmer" />
        <PeopleCard img={image} name="Mr. Parth K. Thacker" role="Professor" />
        <PeopleCard
          img={image}
          name="Miss. Drashti U. Goswami"
          role="Professor"
        />
        <PeopleCard img={image} name="Mrs. Rita Marwada" role="Professor" />
        <PeopleCard img={image} name="Mr. Sachin Doru" role="Professor" />
        <PeopleCard img={image} name="Mr. Neeraj Macchar" role="Professor" />
        <PeopleCard img={image} name="Mrs. Khyati C. Machchhar" role="Clerk" />
        <PeopleCard img={image} name="Mr. Manish A. Pitroda" role="Peon" />
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Faculties: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Faculties;
