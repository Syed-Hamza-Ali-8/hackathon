import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      {/* First Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-12 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              className="object-cover object-center"
              alt="hero"
              src="/About-section/About.png"
              width={250}
              height={400}
            />
          </div>

          {/* Text Content and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-2xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-6 leading-relaxed mt-6 text-[#333333] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-sm">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-sm">
                <IoPlayOutline className="mr-2 block" /> Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto px-5 py-12 flex flex-col items-center text-center">
          <h1 className="text-black text-2xl font-bold mt-3">Why Choose Us</h1>
          <p className="text-black mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Image
            className="mt-8 object-cover object-center"
            alt="hero"
            src="/about.png"
            width={300}
            height={100}
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="text-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/student.png"
                width={60}
                height={60}
                alt="Best Chef Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">BEST CHEF</h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/coffee.png"
                width={60}
                height={60}
                alt="120 Items Food Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">120 Item Food</h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/man.png"
                width={60}
                height={60}
                alt="Clean Environment Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">
                Clean Environment
              </h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}