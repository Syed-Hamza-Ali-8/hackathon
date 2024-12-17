import React from 'react';
import Hero from "./Hero";
import Image from 'next/image';
import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebook } from 'react-icons/fa';

const Pages = () => {

  const filterMenu = [
    { name: "Chicken Fry", count: 26, imageSrc: "/Blog-section/Chicken-fry.png" },
    { name: "Burger Food", count: 46, imageSrc: "/Blog-section/Burger-food.png" },
    { name: "Pizza", count: 16, imageSrc: "/Blog-section/Pizza2.png" },
    { name: "Fresh Fruits", count: 36, imageSrc: "/Blog-section/Fresh-fruits.png" },
    { name: "Vegetables", count: 16, imageSrc: "/Blog-section/Vegetables.png" },
  ];

  return (
    <>
      <Hero />
      <div className="flex flex-wrap px-8 py-4 space-x-8">
        {/* Left Side Content */}
        <div className="w-full lg:w-2/3 mt-24 mb-8">
          <div className="mb-8">
            <Image src="/Blog-details/Wings.png" alt="Chicken Wings" height={400} width={600} />
            <div className="flex items-center mt-4">
              <Image src="/Blog-section/Calendar.png" alt="Calendar" height={24} width={23} />
              <Image src="/Blog-section/Admin.png" alt="Admin" height={24} width={190} className="ml-2" />
            </div>
          </div>

          <div className="mb-8 text-center sm:text-left">
            <h5 className="font-bold text-2xl">
              10 Reasons To Do A Digital Detox Challenge
            </h5>

            <p className="text-gray-600 mt-10 text-base mb-4 w-full md:w-4/5">
              Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci...
            </p>

            <p className="text-gray-600 text-base mb-4 w-full md:w-4/5">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum...
            </p>
          </div>

          <div className="bg-[#FF9F0D] h-[176px] mb-8 flex items-center justify-center">
            <Image src="/Blog-details/Quotes.png" alt="Quotes" height={48} width={48} className="mr-4" />
            <h5 className="font-bold text-white text-xl w-full md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </h5>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-base w-full md:w-4/5 mb-4 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
            </p>
          </div>

          <div className="mb-8 text-center sm:text-left">
            <p className="text-gray-600 text-base w-full md:w-4/5 mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
            </p>

            {/* Image will take full width on small devices */}
            <div className="w-full sm:w-auto">
              <Image src="/Blog-details/Egg-curry.png" alt="Egg Curry" height={366} width={250} className="w-full" />
            </div>

            <p className="text-gray-600 mt-6 text-base w-full md:w-4/5 mb-4 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
            </p>
          </div>

          <div className="flex border mt-20 bg-white mb-8 items-center flex-col md:flex-row">
            <p className="font-bold text-base w-full md:w-4/5">Tags:
              <span className="text-[#828282] space-x-5 ml-2">
                <span>Restaurant</span>
                <span>Dinner</span>
                <span>Pizza</span>
                <span>Yummy</span>
              </span>
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="font-bold text-base mr-4">Share:</span>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} className="text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-pink-600" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-blue-600" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={24} className="text-red-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-bold text-[#333333] text-xl w-full md:w-4/5 mt-16">Comments - 03</h4>
            <Image className='mt-10' src="/Blog-details/Comment1.png" alt="Comment" height={112} width={872} />
            <Image className='mt-10' src="/Blog-details/Comment2.png" alt="Comment" height={112} width={872} />
            <Image className='mt-10' src="/Blog-details/Comment3.png" alt="Comment" height={112} width={872} />
          </div>

          <div className="mb-8">
            <h5 className="font-bold text-[#333333] text-lg w-full md:w-4/5 mt-16">Post a comment</h5>
            <div className="border bg-white mb-4">
              <form className="flex gap-4 mt-10">
                <label htmlFor="Name" className="w-full sm:w-2/5">
                  <input
                    type="text"
                    name="text"
                    placeholder="Name"
                    className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </label>
                <label htmlFor="Email" className="w-full sm:w-2/5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </label>
              </form>
              <textarea
                cols={80}
                rows={10}
                placeholder="Write a comment"
                className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
              ></textarea>
            </div>
          </div>

          <div className="mb-8">
            <button className='bg-[#FF9F0D] text-white px-6 py-2'>Post a comment</button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/3 mt-24 mb-8">
          <div className="w-full max-w-sm space-y-4">
            <div className="mb-8">
              <Image
                src="/Blog-section/Search.png"
                alt="Search bar"
                height={51}
                width={250}
              />
            </div>

            <div className="border-white border-2 bg-slate-100 p-4 flex flex-col items-center mb-8">
              <Image
                src="/Blog-section/Prince-miyako.png"
                alt="Prince Miyako"
                height={29}
                width={125}
              />
              <h6 className="font-bold mt-2 text-center">Prince Miyako</h6>
              <p className="text-[#828282] text-center">Blogger/Photographer</p>
              <Image
                src="/Shop-section/Star.png"
                alt="review"
                height={11}
                width={87}
              />
              <span className="text-[#828282] text-center">(1 Review)</span>
              <p className="text-[#828282] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque...
              </p>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4 mb-8">
              <h6 className="text-[#333333] font-bold mb-2">Recent Post</h6>
              {["Burger", "Dessert", "Pasta", "Smoothie"].map((item, index) => (
                <div key={index} className="mb-4">
                  <Image
                    src={`/Blog-section/${item}.png`}
                    alt={item}
                    height={91}
                    width={99}
                  />
                  <p className="text-[#828282]">June 22, 2020</p>
                  <p className="text-[#4F4F4F]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
                  </p>
                </div>
              ))}
            </div>

            <div className="border-white border-2 bg-slate-100 p-4 mb-8">
              <h6 className="text-[#333333] font-bold mb-2">Filter By Menu</h6>
              <div className="space-y-3">
                {filterMenu.map((menu, index) => (
                  <div key={index} className="flex justify-between items-center mb-4">
                    <Image
                      src={menu.imageSrc}
                      alt={menu.name}
                      height={91}
                      width={99}
                    />
                    <p className="text-[#333333]">{menu.name}</p>
                    <p className="text-[#4F4F4F]">{menu.count}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Popular Tags</h6>
              <div className="flex flex-wrap gap-2">
                {["Sandwich", "Tikka", "BBQ", "Resturant", "Chicken Sharma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"].map((tag, index) => (
                  <p key={index} className="text-[#4F4F4F] border border-gray-300 py-1 px-3 rounded-md">
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Photo Gallery</h6>
              <div className="grid grid-cols-3 gap-4">
                {["Pizza", "Burger", "Curry", "BBQ", "Nuggets", "Egg-fries"].map((item, index) => (
                  <div key={index} className="w-full aspect-square relative">
                    <Image
                      src={`/Blog-section/${item}.png`}
                      alt={item}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4 mb-8">
              <h6 className="text-[#333333] flex justify-center font-bold mb-2">Follow Us</h6>
              <div className="flex gap-4 justify-center">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} className="text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-pink-600" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-blue-600" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={24} className="text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages;