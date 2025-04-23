import Button from "../Button";
import Carousel from "../Carousel";

const Hero = () => {
  return (
    <section className="pb-8 lg:pt-6 min-h-fit w-full flex flex-col items-center lg:justify-around lg:flex-row-reverse">
      <Carousel />

      <div className="text-center">
        <div className="my-8 p-6 text-center bg-blue-950 border border-blue-500 rounded-2xl cursor-default">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Welcome to Department of <br />
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Computer Science
            </span>
          </h1>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            KSKV Kachchh University
          </h2>
        </div>

        <Button title="About us" path="/about" />
      </div>
    </section>
  );
};

export default Hero;
