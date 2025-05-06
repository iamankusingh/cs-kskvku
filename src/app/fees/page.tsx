import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Fees: React.FC = () => {
  return (
    <main className="p-6 lg:px-8  text-center cursor-default">
      <TextLine text="Fees Structure" />

      <div className="py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 text-lg rounded-xl main-card">
          <h4 className="text-xl">MSC (CA & IT) :</h4>

          <p>Semester 1 : 13535</p>
          <p>Semester 2 : 13160</p>
          <p>Semester 3 : 13210</p>
          <p>Semester 4 : 13160</p>
          <p>Semester 5 : 13210</p>
          <p>Semester 6 : 13245</p>
          <p>Semester 7 : 13750</p>
          <p>Semester 8 : 13700</p>
          <p>Semester 9 : 13750</p>
          <p>Semester 10 : 12750</p>
        </div>

        <div className="p-4 text-lg rounded-xl main-card">
          <h4 className="text-xl">MSC (IT) :</h4>

          <p>Semester 1 : 16575</p>
          <p>Semester 2 : 16200</p>
          <p>Semester 3 : 16250</p>
          <p>Semester 4 : 15250</p>
        </div>

        <div className="p-4 text-lg rounded-xl main-card">
          <h4 className="text-xl">PGDCA :</h4>

          <p>Semester 1 : 13000</p>
          <p>Semester 2 : 13000</p>
        </div>

        <div className="p-4 text-lg rounded-xl main-card">
          <h4 className="text-xl">BS in CS :</h4>

          <p>Semester 1 : 13000</p>
          <p>Semester 2 : 13000</p>
          <p>Semester 3 : 13000</p>
          <p>Semester 4 : 13000</p>
          <p>Semester 5 : 13000</p>
          <p>Semester 6 : 13000</p>
          <p>Semester 7 : 13000</p>
          <p>Semester 8 : 13000</p>
        </div>
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Fees-Structure: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Fees;
