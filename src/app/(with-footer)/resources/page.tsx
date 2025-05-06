import ResourceCard from "@/components/ResourceCard";
import TextLine from "@/components/TextLine";
import { Metadata } from "next";
import React from "react";

const Resources: React.FC = () => {
  return (
    <main className="p-4 lg:px-8 text-center">
      <TextLine text="Resources" />

      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ResourceCard header="Departmental Services">
          <a href="https://kskvku.ac.in" target="_blank">
            KSKVKU site
          </a>
        </ResourceCard>

        <ResourceCard header="General Computer Science">
          <a href="https://w3schools.com" target="_blank">
            W3Schools
          </a>
          <a href="https://geeksforgeeks.org" target="_blank">
            Geeksforgeeks
          </a>
          <a href="https://wikipedia.org" target="_blank">
            Wikipedia
          </a>
          <a href="https://tutorialspoint.com" target="_blank">
            Tutorialspoints
          </a>
          <a href="https://stackoverflow.com" target="_blank">
            Stack Overflow
          </a>
          <a href="https://roadmap.sh" target="_blank">
            Roadmap.sh
          </a>
        </ResourceCard>

        <ResourceCard header="Web Developement">
          <a href="https://developer.mozilla.org" target="_blank">
            MDN Web Docs
          </a>
          <a href="https://react.dev" target="_blank">
            ReactJs
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            Tailwindcss
          </a>
          <a href="https://nodejs.org" target="_blank">
            NodeJs
          </a>
          <a href="https://npmjs.com" target="_blank">
            Npmjs
          </a>
          <a href="https://expressjs.com" target="_blank">
            ExpressJs
          </a>
          <a href="https://nextjs.org" target="_blank">
            NextJs
          </a>
          <a href="https://mongodb.com" target="_blank">
            Mongodb
          </a>
          <a href="https://svelte.dev" target="_blank">
            Svelte
          </a>
          <a href="https://threejs.org" target="_blank">
            ThreeJs
          </a>
          <a href="https://angularjs.org" target="_blank">
            AngularJs
          </a>
          <a href="https://vuejs.org" target="_blank">
            VueJs
          </a>
          <a href="https://djangoproject.com" target="_blank">
            Django
          </a>
          <a href="https://flask.palletsprojects.com" target="_blank">
            Flask
          </a>
        </ResourceCard>

        <ResourceCard header="Mobile App Developement">
          <a href="https://reactnative.dev" target="_blank">
            React Native
          </a>
          <a href="https://flutter.dev" target="_blank">
            Flutter
          </a>
          <a href="https://v2.tauri.app" target="_blank">
            Tauri
          </a>
          <a href="https://developer.android.com/studio" target="_blank">
            Android Studio
          </a>
          <a href="https://kotlinlang.org" target="_blank">
            Kotlin
          </a>
          <a href="https://developer.apple.com/swift" target="_blank">
            Swift
          </a>
          <a href="https://firebase.google.com" target="_blank">
            Firebase
          </a>
        </ResourceCard>

        <ResourceCard header="Desktop App Developement">
          <a href="https://electronjs.org" target="_blank">
            Electron
          </a>
          <a href="https://v2.tauri.app" target="_blank">
            Tauri
          </a>
          <a href="https://qt.io" target="_blank">
            Qt
          </a>
          <a href="https://openjfx.io" target="_blank">
            JavaFx
          </a>
          <a href="https://reactnative.dev" target="_blank">
            React Native
          </a>
          <a href="https://flutter.dev" target="_blank">
            Flutter
          </a>
          <a
            href="https://learn.microsoft.com/en-us/windows/apps/winui"
            target="_blank"
          >
            WinUi
          </a>
        </ResourceCard>

        <ResourceCard header="Research">
          <a href="https://scholar.google.com" target="_blank">
            Google Scholar
          </a>
          <a href="https://web.archive.org" target="_blank">
            Internet Archive
          </a>
          <a href="https://jstor.org" target="_blank">
            JSTOR
          </a>
          <a href="https://books.google.co.in" target="_blank">
            Google Books
          </a>
          <a href="https://ndl.iitkgp.ac.in" target="_blank">
            NDL India
          </a>
          <a href="https://ieee.org" target="_blank">
            IEEE
          </a>
          <a href="https://researchgate.net" target="_blank">
            ResearchGate
          </a>
        </ResourceCard>

        <ResourceCard header="Scholarships">
          <a href="https://scholarships.gujarat.gov.in" target="_blank">
            Chief Minister Scholarship Scheme
          </a>
          <a href="https://scholarships.gov.in" target="_blank">
            National Scholarship Portal
          </a>
          <a href="https://scholarships.reliancefoundation.org" target="_blank">
            Reliance Foundation
          </a>
          <a href="https://swamidayanand.org/scholarship-india" target="_blank">
            Swami Dayanand Scholarship
          </a>
        </ResourceCard>

        <ResourceCard header="Tech Update">
          <a
            href="https://timesofindia.indiatimes.com/technology"
            target="_blank"
          >
            The Times of India
          </a>
          <a href="https://m.economictimes.com/tech" target="_blank">
            The Economics Times
          </a>
          <a href="https://hindustantimes.com/technology" target="_blank">
            Hindustan Times
          </a>
          <a href="https://thehindu.com/sci-tech/technology" target="_blank">
            The Hindu
          </a>
          <a href="https://blog.google" target="_blank">
            Google Blog
          </a>
          <a href="https://blogs.microsoft.com" target="_blank">
            Microsoft Blog
          </a>
          <a href="https://netflixtechblog.com" target="_blank">
            Netflix Tech Blog
          </a>
          <a href="https://medium.com/tag/technology" target="_blank">
            Medium
          </a>
          <a href="https://apple.com/newsroom" target="_blank">
            Apple Newsroom
          </a>
          <a href="https://daily.dev" target="_blank">
            Daily.dev
          </a>
        </ResourceCard>

        <ResourceCard header="Universities in Gujarat">
          <a href="https://gujaratuniversity.ac.in" target="_blank">
            Gujarat University
          </a>
          <a href="https://gtu.ac.in" target="_blank">
            Gujarat Technological University
          </a>
          <a href="https://saurashtrauniversity.edu" target="_blank">
            Saurashtra University
          </a>
          <a href="https://baou.edu.in" target="_blank">
            Dr.Babasaheb ambedkar open University
          </a>
          <a href="https://spuvvn.edu" target="_blank">
            Sardar Patel University
          </a>
          <a href="https://paruluniversity.ac.in" target="_blank">
            Parul University
          </a>
          <a href="https://mica.ac.in" target="_blank">
            MICA
          </a>
          <a href="https://nirmauni.ac.in" target="_blank">
            Nirma University
          </a>
          <a href="https://marwadiuniversity.ac.in" target="_blank">
            Marvadi University
          </a>
          <a href="https://gokuluniversity.ac.in" target="_blank">
            Gokul Global University
          </a>
          <a href="https://ahduni.edu.in" target="_blank">
            Ahmedabad University
          </a>
        </ResourceCard>

        <ResourceCard header="Universities in India">
          <a href="https://du.ac.in" target="_blank">
            University of Delhi
          </a>
          <a href="https://mu.ac.in" target="_blank">
            University of Mumbai
          </a>
          <a href="https://bhu.ac.in" target="_blank">
            Banaras Hindu University
          </a>
          <a href="https://jnu.ac.in" target="_blank">
            Jawahar Nehru University
          </a>
          <a href="https://uohyd.ac.in" target="_blank">
            University of Hydarabad
          </a>
          <a href="https://gauhati.ac.in" target="_blank">
            Gauhati University
          </a>
          <a href="https://caluniv.ac.in" target="_blank">
            University of Calcutta
          </a>
          <a href="https://unom.ac.in" target="_blank">
            University of Madras
          </a>
          <a href="https://annauniv.edu" target="_blank">
            Anna University
          </a>
          <a href="https://bits-pilani.ac.in" target="_blank">
            BITS
          </a>
          <a href="https://keralauniversity.ac.in" target="_blank">
            University of Kerala
          </a>
          <a href="https://andhrauniversity.edu.in" target="_blank">
            Andhra University
          </a>
        </ResourceCard>

        <ResourceCard header="Insitute of National Importance">
          <a href="https://education.gov.in/iits" target="_blank">
            IIT
          </a>
          <a href="https://education.gov.in/iiits" target="_blank">
            IIIT
          </a>
          <a href="https://education.gov.in/iims" target="_blank">
            IIM
          </a>
          <a href="https://education.gov.in/nits" target="_blank">
            NIT
          </a>
          <a
            href="https://education.gov.in/iisc-bangalore-iisers"
            target="_blank"
          >
            IISER
          </a>
          <a
            href="https://neetugguidance.in/institutes.php?coldesc_id=42"
            target="_blank"
          >
            AIIMS
          </a>
          <a
            href="https://shiksha.com/design/articles/list-of-nids-in-india-courses-fee-admission-process-blogId-32271"
            target="_blank"
          >
            NID
          </a>
          <a href="https://niftem.ac.in/newsite/" target="_blank">
            NIFTEM
          </a>
          <a href="https://niftem-t.ac.in" target="_blank">
            NIFTEM-T
          </a>
          <a href="https://pharma-dept.gov.in/nipers" target="_blank">
            NIPERS
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Schools_of_Planning_and_Architecture"
            target="_blank"
          >
            SPA
          </a>
          <a
            href="https://en.wikipedia.org/wiki/National_Forensic_Sciences_University"
            target="_blank"
          >
            NFSU
          </a>
        </ResourceCard>

        <ResourceCard header="Global Universities">
          <a href="https://ox.ac.uk" target="_blank">
            University of Oxford
          </a>
          <a href="https://mit.edu" target="_blank">
            Massachusetts Institute of Technology
          </a>
          <a href="https://harvard.edu" target="_blank">
            Harvard University
          </a>
          <a href="https://cam.ac.uk" target="_blank">
            University of Cambridge
          </a>
          <a href="https://universityofcalifornia.edu" target="_blank">
            University of California
          </a>
          <a href="https://nus.edu.sg" target="_blank">
            National University of Singapore
          </a>
          <a href="https://upenn.edu" target="_blank">
            University of Pennsylvania
          </a>
          <a href="https://uchicago.edu" target="_blank">
            University of Chicago
          </a>
          <a href="https://hku.hk" target="_blank">
            University of Hong Kong
          </a>
          <a href="https://uva.nl/en" target="_blank">
            University of Amsterdam
          </a>
          <a href="https://ubc.ca" target="_blank">
            University of British Columbia
          </a>
        </ResourceCard>
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Resources: Department of Computer Science | KSKVKU",
  description:
    "Prototype Website of Department of computer Science at Krantiguru Shyamji Krishna verma Kachchh university",
};

export default Resources;
