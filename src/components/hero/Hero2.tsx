import React from "react";
import Card from "../Card";
import TextLine from "../TextLine";

const Hero2 = () => {
  return (
    <section className="py-4 text-center cursor-default">
      <TextLine text="Programs we offers" />

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          heading="MSC (CA & IT)"
          title1="Under & Post Graduate"
          title2="year program"
          title3="After 12th Science or commerce"
          path="/programs"
        />

        <Card
          heading="MSC (IT)"
          title1="Post Graduate"
          title2="2 year program"
          title3="After BCA, BSC, bTech"
          path="/programs"
        />

        <Card
          heading="PGDCA"
          title1="Post Graduate"
          title2="1 year program"
          title3="After any batchlor degree"
          path="/programs"
        />

        <Card
          heading="BS in CS"
          title1="Under Graduate"
          title2="4 year program"
          title3="After 12th from any stream"
          path="/programs"
        />

        <Card
          heading="Doctor of Philosphy"
          title1="PhD in Computer Science"
          title2="Research oriented"
          title3="After MCA, MSC, mTech"
          path="/programs"
        />
      </div>
    </section>
  );
};

export default Hero2;
