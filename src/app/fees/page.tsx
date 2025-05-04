import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Fees: React.FC = () => {
  return (
    <main className="p-6 lg:px-8  text-center">
      <TextLine text="Fees Structure" />
    </main>
  );
};

export const metadata: Metadata = {
  title: "Fees-Structure: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Fees;
