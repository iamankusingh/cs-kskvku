import Button from "@/components/Button";
import CarrerOption from "@/components/CarrerOption";
import ProgramCard from "@/components/ProgramCard";
import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Programs: React.FC = () => {
  return (
    <main className="p-6 lg:px-8  text-center">
      <TextLine text="Programs we offer" />

      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgramCard
          heading="MSC (CA & IT) Integrated"
          p1="The M.Sc. (Computer Applications & IT) program is a highly sought-after course, focusing on cutting-edge technologies and industry-oriented learning. It equips students with essential skills to thrive in today's fast-evolving tech landscape."
          p2="The curriculum covers software development, cloud computing, AI, cybersecurity, and data science, ensuring a strong foundation in both core concepts and emerging trends. Specialized electives like Machine Learning, Blockchain, IoT, and Full-Stack Development align with industry demands."
          p3="Regular curriculum updates integrate the latest advancements, maintaining relevance in the IT sector. With a balance of theory and hands-on practice, the program fosters innovation, research, and professional excellence, ensuring graduates are industry-ready from day one."
          li1="Intake : 80"
          li2="Under and Post Graduate"
          li3="5 year Program"
          li4="Eligibility: HSC or 10+2 in Science or Commerce stream from a recognized board with minimum 40% marks."
        >
          <Button title="View Sllybus" path="/courses" />
        </ProgramCard>

        <ProgramCard
          heading="MSC (IT)"
          p1="The M.Sc. (Information Technology) program offers in-depth knowledge of Cloud Computing, Cybersecurity, AI, Machine Learning, Blockchain, and Advanced Web Technologies. It combines theoretical foundations with hands-on experience to ensure students are industry-ready."
          p2="With a strong focus on research and practical software development, students gain expertise in data science, and cybersecurity through real-world projects in advanced labs."
          p3="Emphasizing Information Security and Emerging Technologies, the curriculum is regularly updated to match industry trends. Through internships, live projects, and expert mentorship, the program fosters innovation, problem-solving, and technical excellence, preparing graduates for impactful careers in tech firms, research institutions, and startups."
          li1="Intake : 60"
          li2="Post Graduate"
          li3="2 year Program"
          li4="Eligibility: BCA, B.Sc. (IT), B.Tech. (IT/CE/CSE) degree from recognized university with minimum 40% marks."
        >
          <Button title="View Sllybus" path="/courses" />
        </ProgramCard>

        <ProgramCard
          heading="PGDCA"
          p1="The Post Graduate Diploma in Computer Applications (PGDCA) is a one-year program offering specialized knowledge in Computer Science, open to graduates from any stream. It provides a strong foundation in programming, software development, database management, and cybersecurity."
          p2="Students gain hands-on experience in full-stack development, cloud computing, AI, and data analytics, preparing them for careers as System Analysts, Software Developers, Database Admin, and IT Consultants."
          p3="With an industry-aligned curriculum, PGDCA also serves as a pathway for higher studies like MCA and M.Sc. (IT). The program ensures graduates are job-ready with modern tech skills, making them highly sought-after in today’s digital era."
          li1="Intake : 60"
          li2="Post Graduate"
          li3="1 year Program"
          li4="Eligibility: Graduate degree from a recognized university with minimum 40% marks."
        >
          <Button title="View Sllybus" path="/courses" />
        </ProgramCard>

        <ProgramCard
          heading="BS in CS"
          p1="The Bachelor of Science in Computer Science (B.Sc. CS) is an NEP 2024-based undergraduate program that equips students with fundamental and advanced computing skills. The curriculum covers programming, algorithms, software development, AI, cybersecurity, cloud computing, and blockchain, ensuring a strong theoretical and practical foundation."
          p2="Students gain hands-on experience through real-world projects, coding labs, and internships, preparing them for careers in software development, data science, cybersecurity, and IT consulting. The program fosters problem-solving, innovation, and analytical thinking, essential for success in the tech industry."
          p3="With an industry-aligned curriculum and opportunities for research, certifications, and specialization in emerging technologies, graduates are well-prepared for higher studies (M.Sc. CS, MCA) or direct employment in tech companies, startups, and government organizations."
          li1="Intake : 60"
          li2="Under Graduate"
          li3="4 year Program"
          li4="Eligibility: HSC or 10+2 in Science or Commerce stream from a recognized board with minimum 40% marks."
        >
          <Button title="View Sllybus" path="/courses" />
        </ProgramCard>

        <ProgramCard
          heading="PHD"
          p1="The Ph.D. in Computer Science is a research-driven program for those passionate about technology, innovation, and problem-solving. It covers advanced computing, AI, machine learning, cybersecurity, blockchain, quantum computing, and data science, preparing scholars for impactful contributions in academia, industry, and research."
          p2="Doctoral candidates conduct original research, collaborate across disciplines, and publish in top journals, addressing real-world computing challenges. With access to cutting-edge labs, high-performance computing, and expert mentorship, they develop groundbreaking solutions."
          p3="Graduates pursue careers as research scientists, university professors, AI specialists, data architects, and tech leaders, driving technological advancements in industry and academia worldwide."
          li1="Intake depends on exam"
          li2="Doctrate"
          li3="3 to 6 year"
          li4="Eligibility: Masters degree from a recognized university with minimum 60% marks."
        >
          <Button title="Contact us" path="/contact" />
        </ProgramCard>
      </div>

      <div>
        <TextLine text="Some Carrer options" />

        <div className="pt-2 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
          <CarrerOption head="Software Developement :">
            <li>Software Engineer</li>
            <li>Full Stack Developer</li>
            <li>App Deeloper (Android/IOS)</li>
          </CarrerOption>

          <CarrerOption head="Data Science and AI :">
            <li>Data Scientist & Analyist</li>
            <li>Machine Learning Engineer</li>
            <li>AI Engineer</li>
            <li>Big Data Engineer</li>
          </CarrerOption>

          <CarrerOption head="Database and Cloud :">
            <li>Database Administrator (DBA)</li>
            <li>SQL Developer</li>
            <li>Cloud Architect</li>
            <li>Data Engineer</li>
          </CarrerOption>

          <CarrerOption head="System Admin & IT Support :">
            <li>System Administrator</li>
            <li>DevOps Engineer</li>
            <li>IT Support Specialist</li>
            <li>Linux Administrator</li>
          </CarrerOption>

          <CarrerOption head="UI/UX & Web Development :">
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>PHP developer</li>
            <li>Full-Stack Developer</li>
            <li>UI/UX Designer</li>
            <li>Web Animator</li>
          </CarrerOption>

          <CarrerOption head="Graphics Designer & Editor :">
            <li>Graphics Designer</li>
            <li>3D Artist</li>
            <li>Video Editor</li>
          </CarrerOption>

          <CarrerOption head="Teaching & Research :">
            <li>Lecturer/Professor (College/University)</li>
            <li>
              Researcher & Scientist (AI, ML, DL, Advance computing, etc.)
            </li>
          </CarrerOption>

          <CarrerOption head="Entrepreneurship & Freelancing :">
            <li>Startup Founder (Tech-based Startup)</li>
            <li>Freelancer (Web Development, App Development, AI/ML, etc.)</li>
            <li>Technical Content Writer / YouTuber</li>
          </CarrerOption>
        </div>
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Programs: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Programs;
