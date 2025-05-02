import CourseCard from "@/components/CourseCard";
import TextLine from "@/components/TextLine";
import { cait } from "@/data/courses";
import { Metadata } from "next";
import React from "react";

const Courses: React.FC = () => {
  return (
    <main className="p-4 lg:px-8 text-center">
      <TextLine text="Courses in Programs" />

      <div className="text-left grid lg:grid-cols-2 gap-4">
        <div>
          <h3 className="py-4">MSC (CA & IT) Integrated :</h3>

          <CourseCard sem={1}>
            {Object.keys(cait[0]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[0][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={2}>
            {Object.keys(cait[1]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[1][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={3}>
            {Object.keys(cait[2]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[2][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={4}>
            {Object.keys(cait[3]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[3][key]}</p>
              </div>
            ))}
          </CourseCard>
        </div>

        <div>
          <h3 className="py-4">MSC ( IT ) :</h3>

          <CourseCard sem={1}>
            {Object.keys(cait[0]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[0][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={2}>
            {Object.keys(cait[1]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[1][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={3}>
            {Object.keys(cait[2]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[2][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={4}>
              <div>
                <p className="p-4 text-xl text-center">Industrial Project or Internship</p>
              </div>
          </CourseCard>
        </div>

        <div>
          <h3 className="py-4">PGDCA :</h3>

          <CourseCard sem={1}>
            {Object.keys(cait[0]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[0][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={2}>
            {Object.keys(cait[1]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[1][key]}</p>
              </div>
            ))}
          </CourseCard>
        </div>

        <div>
          <h3 className="py-4">BS in CS:</h3>

          <CourseCard sem={1}>
            {Object.keys(cait[0]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[0][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={2}>
            {Object.keys(cait[1]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[1][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={3}>
            {Object.keys(cait[2]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[2][key]}</p>
              </div>
            ))}
          </CourseCard>

          <CourseCard sem={4}>
            {Object.keys(cait[3]).map((key, index) => (
              <div className="py-1 flex" key={index}>
                <span className="w-36">{key}</span>
                <p className="w-full text-left">{cait[3][key]}</p>
              </div>
            ))}
          </CourseCard>
        </div>
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Courses: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Courses;
