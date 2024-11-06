"use client"; // This is a client component 👈🏽

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "./component/carousel"

import VideoPlayer from "./component/video";


export default function Home() {

  const slides = [
    "assets/carousel/fuji.png",
    "assets/carousel/tower.png",
    "assets/carousel/village.png",
  ];

  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [ismenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setNavbarBackground("backdrop-blur-md");
        setIsScrolled(true);
      } else {
        setNavbarBackground("bg-transparent");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    console.log(ismenuOpen);
    setMenuOpen(!ismenuOpen);
  };
  return (
    <main>
      <nav
        className={`fixed block ${isScrolled ? "sm:top-0" : "sm:top-10"
          } sm:left-0 w-full sm:flex sm:justify-between items-center z-10 px-4 py-2 transition-all duration-300 ${navbarBackground}`}
      >
        <div className="pl-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/assets/bg-logo.png"
              alt="Logo"
              width={84}
              height={84}
            />
            <div className="ml-2 text-2xl font-bold">Zetra Cloud</div>
          </a>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${ismenuOpen ? "transform rotate-45" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    ismenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <ul
          className={`text-center ${ismenuOpen ? "" : "hidden"
            } sm:justify-center sm:items-center sm:flex sm:space-x-4 sm:pr-4 `}
        >
          <li>
            <a
              href="#about"
              className="hover:underline decoration-pink-500 text-xl font-bold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#explore"
              className="hover:underline decoration-pink-500 text-xl font-bold"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#destination"
              className="hover:underline decoration-pink-500 text-xl font-bold"
            >
              Destination
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:underline decoration-pink-500 text-xl font-bold"
            >
              Gallery
            </a>
          </li>
        </ul>
      </nav>

      <div className="relative h-screen w-full">
        <Image
          src="/assets/main-img.png"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="bg-right-bottom"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 ">
          <div className="h-full bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-pink-500 sm:text-2xl font-bold mb-2 text-left animate-fadeInDown delay-500">
            美しいスポット
          </h1>
          <h1 className="text-white sm:text-7xl font-bold animate-fadeInUp delay-1000">EXPLORE JAPAN</h1>
          <h1 className="text-white sm:text-3xl animate-fadeInUp delay-1500">for better experience</h1>
        </div>


      </div>

      <div className="relative mt-8  w-full flex items-center justify-center">
        <div className="h-16 w-1 bg-pink-500 sm:h-32 sm:w-1 flex"></div>
      </div>
      <div className="items-center flex flex-col mt-8">
        <h1 className="text-pink-500 sm:text-2xl font-bold">日本</h1>
        <h1 className="text-white sm:text-3xl font-bold">JAPAN</h1>
      </div>
      <Image
        width={500}
        height={500}
        src="/assets/bg-logo.png"
        alt="logo"
        className="xl:w-24 mx-60 mt-32 hidden lg:block"
      />

      <div
        id="about"
        className="lg:mt-16 mt-32 md:mt-32 relative md:mx-24 xl:mx-60 md:flex-nowrap flex sm:justify-between flex-wrap xl:flex-nowrap scroll-section "
      >
        <div className="md:w-full">
          <h1 className="text-pink-500 text-xl xl:text-2xl font-bold mx-4 md:mx-0 xl:mx-0 ">
            日本について
          </h1>
          <h1 className="text-white md:text-4xl text-3xl xl:text-6xl font-bold mx-4 xl:mx-0 md:mx-0 xl:w-full ">
            ABOUT JAPAN
          </h1>
          <h1 className="text-white xl:text-base md:mx-0 md:max-w-80 xl:max-w-lg text-justify mt-8 mx-4 xl:mx-0 md:line-clamp-3 lg:line-clamp-none line-clamp-3 ">
            Explore Japan&apos;s captivating blend of ancient traditions and modern
            attractions. Discover Kyoto&apos;s serene temples, Tokyo&apos;s bustling
            streets, and the majestic beauty of Mount Fuji. Indulge in
            world-renowned cuisine, from delicate sushi to hearty ramen.
            Experience mesmerizing cherry blossom seasons and immerse yourself
            in rich cultural heritage.
          </h1>
          {/* <video
      width=" 580"
      height="320"
      controls
      className="mt-8 md:w-full xl:w-8/12 "
    >
      <source src="assets/video/cinematic.mp4" type="video/mp4" />
    </video> */}
          <VideoPlayer />
        </div>

        <div className="flex flex-col sm:flex-row md:space-x-2 xl:space-x-8 md:justify-center items-center w-full md:w-10/12 xl:w-6/12 md:grow-0">
          {/* White Tower Image */}
          <Image
            width={500}
            height={500}
            src="/assets/white-tower.png"
            alt="hiroshima"
            className="object-center rounded-lg xl:w-72 sm:h-full h-80 w-11/12 mt-2 md:w-9/12 "
            style={{ filter: "brightness(70%)" }}
          />

          {/* Hiroshima Image */}
          <Image
            width={500}
            height={500}
            src="/assets/hiroshima.png"
            alt="hiroshima"
            className="object-center rounded-lg xl:w-72 sm:h-full mt-2 hidden xl:block md:hidden "
            style={{ filter: "brightness(70%)" }}
          />
        </div>
      </div>


      <div
        id="explore"
        className="items-center flex flex-col mt-8 sm:mt-32 scroll-section"
      >
        <h1 className="text-pink-500 sm:text-2xl font-bold">
          日本へ探検に行く
        </h1>
        <h1 className="text-white sm:text-3xl font-bold">
          GET EXPLORE TO JAPAN
        </h1>
      </div>

      <div className="lg:flex lg:mx-60 lg:space-x-4 lg:mt-16 justify-between md:mx-16 md:mt-8 mt-8">
        <div className="relative w-full lg:w-1/3 h-96 group ">
          <Image
            width={500}
            height={500}
            src="/assets/explore/culture.png"
            alt="culture"
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 ease-in-out transform brightness-50 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform group-hover:translate-y-24">
            <span className="text-white text-4xl font-bold transition-opacity duration-500 ease-in-out">
              Culture
            </span>
            <span className="text-white text-lg mt-2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 text-center">
              Explore diverse cultures around the world.
            </span>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 h-96 group">
          <Image
            width={500}
            height={500}
            src="/assets/explore/ramen.png"
            alt="culinary"
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 ease-in-out transform brightness-50 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform group-hover:translate-y-24">
            <span className="text-white text-4xl font-bold transition-opacity duration-500 ease-in-out">
              Culinary
            </span>
            <span className="text-white text-lg mt-2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 text-center">
              Taste the best cuisines from different regions.
            </span>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 h-96 group">
          <Image
            width={500}
            height={500}
            src="/assets/explore/drone.png"
            alt="technology"
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 ease-in-out transform brightness-50 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform group-hover:translate-y-24">
            <span className="text-white text-4xl font-bold transition-opacity duration-500 ease-in-out">
              Technology
            </span>
            <span className="text-white text-lg mt-2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 text-center">
              Discover the latest advancements in technology.
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-8  w-full flex items-center justify-center">
        <div className="h-16 w-1 bg-pink-500 sm:h-32 sm:w-1 flex"></div>
      </div>

      <div
        id="destination"
        className="items-center flex flex-col mt-8 sm:mt-32 scroll-section"
      >
        <h1 className="text-pink-500 sm:text-2xl font-bold ">
          日本でトップの目的地
        </h1>
        <h1 className="text-white sm:text-5xl font-bold ">
          TOP DESTINATION IN JAPAN
        </h1>
        <h1 className="text-gray-500 text-center mt-4 max-w-lg mx-auto sm:max-w-none text-lg ">
          Explore the most popular tourist destinations in Japan and{" "}
          <br className="hidden sm:inline" /> discover its rich culture and heritage.
        </h1>
      </div>


      <div className="lg:mt-16 flex lg:mx-48 md:flex-col md:items-center flex-col lg:flex-row ">
        <div className="">
          <Image
            width={500}
            height={500} src="/assets/destination/map-nobg.png" alt="map" />
        </div>
        <div className="lg:flex lg:flex-col ">
          <Image
            width={500}
            height={500}
            src="/assets/bg-logo.png"
            alt="logo"
            className="lg:w-24 mb-4 md:hidden hidden lg:block"
          />
          <h1 className="text-pink-500 sm:text-2xl font-bold mb-4 md:text-center text-center hidden lg:block lg:text-left ">
            日本の目的地地図をもっと探索する
          </h1>
          <h1 className="text-white sm:text-5xl font-bold mb-4 md:text-center text-center hidden lg:block lg:text-left ">
            EXPLORE MORE <br /> DESTINATIONS MAP <br /> IN JAPAN
          </h1>
          <h1 className="text-white text-base lg:w-96 lg:mt-8 md:text-center text-center hidden lg:block lg:text-justify ">
            Explore Japan&apos;s diverse regions and uncover hidden gems. From Tokyo to Kyoto, discover rich history, culture, and natural beauty.
          </h1>
          <button className="hidden lg:block text-lg rounded-md w-52 mt-8 h-20 border-4 border-pink-500 text-white hover:bg-pink-500 hover:text-white transition-colors duration-300 font-bold ">
            Explore
          </button>
        </div>
      </div>

      <div className="relative mt-16  w-full flex items-center justify-center">
        <div className="h-16 w-1 bg-pink-500 sm:h-32 sm:w-1 flex"></div>
      </div>

      <div id="gallery" className="items-center flex flex-col mt-8 sm:mt-32 scroll-section">
        <h1 className="text-pink-500 sm:text-2xl font-bold ">
          さまざまな興味深いフォトスポット
        </h1>
        <h1 className="text-white sm:text-5xl font-bold text-center ">
          VARIOUS INTERESTING PHOTO SPOTS
        </h1>
        <h1 className="text-gray-500 text-center mt-4 max-w-lg mx-auto sm:max-w-none text-lg ">
          Explore stunning photo spots worldwide, offering unique and breathtaking backdrops <br className="hidden sm:block" /> for your photography adventures.
        </h1>
      </div>


      <div className="flex lg:flex-row lg:mx-32 lg:mt-16 lg:gap-8 flex-col mx-4 md:mx-32">
        <div>
          <Image
            width={500}
            height={500} src="/assets/bg-logo.png" className="xl:w-24 hidden lg:block" alt="" />
          <h1 className="text-pink-500 sm:text-2xl font-bold mb-4 md:text-center text-center hidden lg:block lg:text-left">
            日本で必見の美しい場所
          </h1>
          <h1 className="text-white sm:text-5xl font-bold mb-4 md:text-center text-center hidden lg:block lg:text-left">
            BEAUTIFUL PLACE <br /> MUST TO VISIT <br /> IN JAPAN
          </h1>
          <h1 className="text-white text-base lg:w-96  lg:mt-8 md:text-center text-center hidden lg:block lg:text-justify">
            Explore Japan&apos;s iconic landscapes and rich culture, from Kyoto&apos;s cherry blossoms to Nara&apos;s serene temples. Discover the perfect blend of tradition and modernity.
          </h1>
          <div className="flex justify-between mt-4">
            <h1 className="text-gray-500 font-bold">PHOTO BY</h1>
            <h1 className="text-white font-bold">GOOGLE IMAGES</h1>
          </div>

        </div>
        <div className="relative lg:max-w-3xl md:max-w-xl md:mx-auto lg:mx-0"> {/* Added mx-auto */}
          <div className="lg:max-w-3xl md:max-w-xl ">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <div
        className="items-center flex flex-col mt-8 sm:mt-32 scroll-section">
        <h1 className="text-pink-500 sm:text-2xl font-bold">
          すべてのギャラリー

        </h1>
        <h1 className="text-white sm:text-4xl font-bold text-center">
          ALL GALLERY
        </h1>

      </div>
      <div className="grid grid-cols-3 lg:gap-8 lg:mx-48 md:mx-24 md:gap-4 md:mt-8 mt-4 mx-8 gap-2">
        <div className="flex flex-col gap-4">
          <Image
            width={500}
            height={500} src="/assets/gallery/3.png" alt="3" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/2.png" alt="2" className="rounded-lg brightness-75 object-cover w-full h-24 basis-1/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/1.png" alt="1" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
        </div>

        <div className="flex flex-col gap-4">
          <Image
            width={500}
            height={500} src="/assets/gallery/4.png" alt="4" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/5.png" alt="5" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/6.png" alt="6" className="rounded-lg brightness-75 object-cover w-full h-24 basis-1/6" />
        </div>

        <div className="flex flex-col gap-4">
          <Image
            width={500}
            height={500} src="/assets/gallery/8.png" alt="8" className="rounded-lg brightness-75 object-cover w-full h-24 basis-1/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/7.png" alt="7" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
          <Image
            width={500}
            height={500} src="/assets/gallery/9.png" alt="9" className="rounded-lg brightness-75 object-cover w-full h-24 basis-2/6" />
        </div>
      </div>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="mr-8 mb-4 lg:mb-0">
                <h2 className="text-xl font-semibold">Stay Connected</h2>
                <p className="text-gray-300">Follow us on social media</p>
              </div>
              <div className="flex space-x-4">
                <a href="" className="text-gray-300 hover:text-white transition duration-300">
                  <Image
                    width={500}
                    height={500} src="/assets/footer/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
                </a>
                <a href="" className="text-gray-300 hover:text-white transition duration-300">
                  <Image
                    width={500}
                    height={500} src="/assets/footer/youtube.svg" alt="WhatsApp" className="h-6 w-6" />
                </a>
                <a href="" className="text-gray-300 hover:text-white transition duration-300">
                  <Image
                    width={500}
                    height={500} src="/assets/footer/instagram.svg" alt="WhatsApp" className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300">&copy;{new Date().getFullYear()} Zetra Cloud</p>

              <ul className="flex space-x-4">
                <li>
                  <a href="" className="text-gray-300 hover:text-white transition duration-300">Home</a>
                </li>
                <li>
                  <a href="" className="text-gray-300 hover:text-white transition duration-300">About</a>
                </li>
                <li>
                  <a href="" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </main>
  );
}