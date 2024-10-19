import React from 'react';
import { FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter, FaTwitterSquare, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gray-900">
      <div className="w-full max-w-screen py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-2 items-center lg:grid-cols-2">
          {/* Logo and Description */}
          <div className="mb-6 p-7 grid grid-cols-1 justify-center gap-4 md:grid-cols-2 md:mb-0">
            <Link to='/' className="flex items-center justify-center gap-2 flex-col ">

              <img
                src="/images/god gallery/vedanttttt.jpg"
                className=" w-[8rem] mr-3 rounded-full"
                alt="Logo"
              />
              <h1 className="text-lg my-2 text-center inline-flex  md:text-2xl font-semibold text-white">
                VEDANT <span className="text-red-600 px-2">DEVOTIONS</span>
              </h1>
            </Link>
            <div>
              <p className="mb-3  pt-3 text-gray-400 mx-5">
                Welcome to Vedant Devotions! We are a digital space dedicated to spreading the essence of devotion and spirituality through captivating images and inspiring content. </p>

            </div>
          </div>

          {/* Links Sections */}
          <div className="flex justify-between px-10 md:justify-end md:gap-20">
            {/* Company Section */}


            {/* Help Center Section */}
            <div className='flex flex-col  '>
              <h2 className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-500  dark:text-gray-400 font-medium">
                <li className="mb-4">

                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about-us" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/videos" className="hover:underline">
                    All Videos
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>

                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className='flex flex-col  justify-start h-full'>
              <h2 className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500  dark:text-gray-400 font-medium">
                <li className="mb-4">

                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between px-5">
          <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
            © {currentYear}{' '}
            <Link to="/" className="hover:underline">
              Vedant Devotions
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex sm:justify-center text-3xl">
            {/* Facebook */}
            <Link to="#" className="text-gray-300 hover:text-blue-800 dark:hover:text-white ml-5">
            <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </Link>

            {/* Discord */}
            <Link to="#" className="text-gray-300 hover:text-red-800 dark:hover:text-white ml-5">
            <FaInstagram />
              <span className="sr-only">Instagram</span>
            </Link>

            {/* Twitter */}
            <Link to="#" className="text-gray-300 hover:text-blue-800 dark:hover:text-white ml-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>

            {/* Dribbble */}
            <Link to="#" className="text-gray-300 hover:text-red-800 dark:hover:text-white ml-5">
              <FaYoutube />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
