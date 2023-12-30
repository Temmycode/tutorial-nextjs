/* eslint-disable jsx-a11y/alt-text */
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedbyed</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Temiloluwa Akisanya{" "}
          </h2>
          <h3 className="text-2xl py-2">Mobile Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Software engineering looking to provider solution to real world
            problems using software engineering tools. Check out some of my work
            down below
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">My Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            I am a skilled an proficient mobile developer. I work with the
            <span className="text-teal-500">flutter framework</span> developed
            by google for cross-platform development. I also work with the
            <span className="text-teal-500">swift ui frame work </span> for
            apple product mobile development
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including mobile application
            development, software application backend development and web
            application frontend development
          </p>
        </div>
        <div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="m-auto" src={design} height={100} width={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating and designing beautiful and elegant mobile and web
              applications
            </p>
            <h4 className="py-4 text-teal-600">Deisgn tools I use</h4>
            <p className="text-gray-800 py0">Figma</p>
            <p className="text-gray-800 py0">Photoshop</p>
            <p className="text-gray-800 py0">Rive</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="m-auto" src={code} height={100} width={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating and designing beautiful and elegant mobile and web
              applications
            </p>
            <h4 className="py-4 text-teal-600">Deisgn tools I use</h4>
            <p className="text-gray-800 py0">Figma</p>
            <p className="text-gray-800 py0">Photoshop</p>
            <p className="text-gray-800 py0">Rive</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              className=" m-auto"
              src={consulting}
              height={100}
              width={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating and designing beautiful and elegant mobile and web
              applications
            </p>
            <h4 className="py-4 text-teal-600">Deisgn tools I use</h4>
            <p className="text-gray-800 py0">Figma</p>
            <p className="text-gray-800 py0">Photoshop</p>
            <p className="text-gray-800 py0">Rive</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            I am a skilled an proficient mobile developer. I work with the
            <span className="text-teal-500"> flutter framework</span> developed
            by google for cross-platform development. I also work with the
            <span className="text-teal-500"> swift ui frame work </span> for
            apple product mobile development
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including mobile application
            development, software application backend development and web
            application frontend development
          </p>
        </div>
        <div>
          <div className="pb-10">
            <Image src={web1} className="rounded-2xl drop-shadow-lg" />
          </div>
          <div className="pb-10">
            <Image src={web2} className="rounded-2xl drop-shadow-lg" />
          </div>
          <div className="pb-10">
            <Image src={web3} className="rounded-2xl drop-shadow-lg" />
          </div>
          <div className="pb-10">
            <Image src={web4} className="rounded-2xl drop-shadow-lg" />
          </div>
          <div className="pb-10">
            <Image src={web5} className="rounded-2xl drop-shadow-lg" />
          </div>
          <div className="pb-10">
            <Image src={web6} className="rounded-2xl drop-shadow-lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
