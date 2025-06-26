import CourseCard from "@/components/CourseCard";
import TextLine from "@/components/TextLine";
import { cait, pgdca, bscs } from "@/data/courses";
import { Metadata } from "next";
import React from "react";

const Courses: React.FC = () => {
  return (
    <main className="p-4 lg:px-8 text-center">
      <TextLine text="Courses in Programs" />

      <div className="text-left lg:flex gap-4">
        <div>
          {/* msc cait */}
          <article>
            <h3 className="py-4 font-bold">MSC (CA & IT) Integrated :</h3>

            <CourseCard sem={1} pdf="/MSC(ca_it)_1_2.pdf">
              {Object.keys(cait[0]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[0][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={2} pdf="/MSC(ca_it)_1_2.pdf">
              {Object.keys(cait[1]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[1][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={3} pdf="/MSC(ca_it)_3_4.pdf">
              {Object.keys(cait[2]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[2][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={4} pdf="/MSC(ca_it)_3_4.pdf">
              {Object.keys(cait[3]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[3][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={5} pdf="/MSC(ca_it)_5_6.pdf">
              {Object.keys(cait[4]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[4][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={6} pdf="/MSC(ca_it)_5_6.pdf">
              {Object.keys(cait[5]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[5][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={7} title="Semester 7 PDF" pdf="/MSC(ca_it)_7.pdf">
              {Object.keys(cait[6]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[6][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={8} title="Semester 8 PDF" pdf="/MSC(ca_it)_8.pdf">
              {Object.keys(cait[7]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[7][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={9} title="Semester 9 PDF" pdf="/MSC(ca_it)_9.pdf">
              {Object.keys(cait[8]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[8][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard
              sem={10}
              title="Semester 10 PDF"
              pdf="/MSC(ca_it)_10.pdf"
            >
              <div>
                <p className="p-4 text-xl text-center">
                  Industrial Project or Internship
                </p>
              </div>
            </CourseCard>
          </article>

          {/* pgdca */}
          <article>
            <h3 className="py-4 font-bold">PGDCA :</h3>

            <CourseCard sem={1} title="Semester 1 PDF" pdf="/PGDCA_1.pdf">
              {Object.keys(pgdca[0]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {pgdca[0][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={2} title="Semester 2 PDF" pdf="/PGDCA_2.pdf">
              {Object.keys(pgdca[1]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {pgdca[1][key]}
                  </p>
                </div>
              ))}
            </CourseCard>
          </article>
        </div>

        <div>
          {/* mac it */}
          <article>
            <h3 className="py-4 font-bold">MSC ( IT ) :</h3>

            <CourseCard sem={1} title="Semester 1 PDF" pdf="/MSC(ca_it)_7.pdf">
              {Object.keys(cait[6]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[6][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={2} title="Semester 2 PDF" pdf="/MSC(ca_it)_8.pdf">
              {Object.keys(cait[7]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[7][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={3} title="Semester 3 PDF" pdf="/MSC(ca_it)_9.pdf">
              {Object.keys(cait[8]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {cait[8][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={4} title="Semester 4 PDF" pdf="/MSC(ca_it)_10.pdf">
              <div>
                <p className="p-4 text-xl text-center">
                  Industrial Project or Internship
                </p>
              </div>
            </CourseCard>
          </article>

          {/* bs in cs */}
          <article>
            <h3 className="py-4 font-bold">BS in CS:</h3>

            <CourseCard sem={1} title="Comming Soon">
              {Object.keys(bscs[0]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {bscs[0][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={2} title="Comming Soon">
              {Object.keys(bscs[1]).map((key, index) => (
                <div className="py-1 flex" key={index}>
                  <span className="w-36 border">{key}</span>
                  <p className="w-full pl-1 text-left border-y border-r">
                    {bscs[1][key]}
                  </p>
                </div>
              ))}
            </CourseCard>

            <CourseCard sem={3} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>

            <CourseCard sem={4} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>

            <CourseCard sem={5} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>

            <CourseCard sem={6} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>

            <CourseCard sem={7} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>

            <CourseCard sem={8} title="Comming Soon">
              <p className="p-4 text-xl text-center">Comming soon</p>
            </CourseCard>
          </article>
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
