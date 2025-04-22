import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="min-h-[90dvh] w-full flex flex-col items-center lg:justify-around lg:flex-row-reverse">
        <Carousel />

        <div className="my-8 p-6 text-center bg-blue-950 border border-blue-500 rounded-2xl shadow-blue-300 text-white">
          <h1 className="text-2xl">
            Welcome to Department of <br />{" "}
            <span className="text-3xl font-bold">Computer Science</span>
          </h1>

          <h2 className="text-2xl">KSKV Kachchh University</h2>
        </div>
      </div>
    </main>
  );
}
