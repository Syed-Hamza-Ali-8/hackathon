import Image from "next/image";
import Hero from "./Hero";

const Shop = () => {
  return (
    <>
      <Hero />
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <div>
          {/* Main Image */}
          <Image
            className="mt-12 sm:mt-16 md:mt-20 lg:mt-[300px] mx-auto rounded-[6px] h-[400px] hover:cursor-pointer"
            src="/Shop-section/Rectangle 8883.png"
            alt="Shop list 1"
            height={206}
            width={300}
          />

          {/* Smaller Images */}
          <div className="mt-[-395px] space-y-10 hover:cursor-pointer">
            <Image
              className="mx-auto sm:mx-[150px] md:mx-[200px]"
              src="/Shop-section/Rectangle 8884.png"
              alt="Shop list 2"
              height={132}
              width={70}
            />
            <Image
              className="mx-auto sm:mx-[150px] md:mx-[200px]"
              src="/Shop-section/Rectangle 8885.png"
              alt="Shop list 3"
              height={132}
              width={70}
            />
            <Image
              className="mx-auto sm:mx-[150px] md:mx-[200px]"
              src="/Shop-section/Rectangle 8886.png"
              alt="Shop list 4"
              height={132}
              width={70}
            />
            <Image
              className="mx-auto sm:mx-[150px] md:mx-[200px]"
              src="/Shop-section/Rectangle 8887.png"
              alt="Shop list 5"
              height={132}
              width={70}
            />
          </div>

          {/* Product Information */}
          <div className="text-white bg-[#FF9F0D] w-14 font-normal text-[10px] px-2 py-2 mt-[-400px] sm:mt-[-350px] mx-auto hover:cursor-pointer">
            In stock
          </div>

          <h2 className="font-sans text-[30px] font-bold text-center md:text-left mt-6">Yummy Chicken Chup</h2>
          <p className="font-normal text-[15px] w-full sm:w-[450px] mx-auto text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque quos qui quidem deserunt iste blanditiis, beatae aliquam perspiciatis aliquid magnam tenetur ut consequuntur ducimus! Ipsa similique commodi, perferendis sit vero qui, blanditiis odit nisi excepturi, maxime itaque labore eligendi!
          </p>

          <h4 className="font-sans font-bold text-[20px] text-center mt-6">54.00$</h4>

          <Image className="mx-auto mt-4" src="/Shop-section/Star.png" alt="Give rating" height={26} width={80} />
          <p className="text-[#828282] text-[12px] text-center mt-[-15px]">5.0 Rating</p>
          <p className="text-[#828282] text-[12px] text-center mt-[-18px]">22 Review</p>

          <p className="font-normal text-[13px] text-center leading-[35px] mt-4">Dictum/cursus/Risus</p>

          <Image className="mx-auto mt-4" src="/Shop-section/count.png" alt="counter" height={50} width={120} />

          {/* Cart Section */}
          <div className="bg-[#F4F4F4] p-4 mt-8 rounded-lg">
            <h4 className="text-center text-[18px] font-bold">Add to Cart</h4>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-[#e67e22]">+ Add to Cart</button>
              <button className="bg-[#D9D9D9] text-black px-6 py-2 rounded-lg hover:bg-[#b3b3b3]">Remove</button>
            </div>
            <p className="text-center text-[14px] mt-4">Quantity: 1</p>
          </div>

          <Image className="mt-[-33px] mx-auto hover:cursor-pointer" src="/Shop-section/Cart.png" alt="Add to cart" height={50} width={130} />

          <Image className="mt-8 mx-auto hover:cursor-pointer" src="/Shop-section/Wishlist.png" alt="Add to wishlist" height={26} width={170} />

          <p className="text-[11px] font-sans leading-[30px] text-center mt-4">Category: Pizza</p>
          <p className="text-[11px] font-sans leading-[22px] text-center">Tag: Our Shop</p>

          <p className="text-[11px] font-sans text-center mt-4">Share : </p>
          <div className="flex w-4 space-x-2 justify-center mt-[-15px] hover:cursor-pointer">
            <Image src="/Shop-section/Vector.png" alt="icon" height={24} width={24} />
            <Image src="/Shop-section/Facebook.png" alt="icon" height={24} width={24} />
            <Image src="/Shop-section/Twitter.png" alt="icon" height={24} width={24} />
            <Image src="/Shop-section/Circle.png" alt="icon" height={24} width={24} />
            <Image src="/Shop-section/Instagram.png" alt="icon" height={24} width={24} />
          </div>

          {/* Description */}
          <div>
            <Image className="mt-24 mx-auto" src="/Shop-section/Description.png" alt="description" height={50} width={110} />
            <p className="text-[14px] font-sans text-center mt-[-25px]">Reviews (24)</p>
            <p className="text-[#828282] text-[14px] w-full sm:w-[740px] mx-auto mt-[40px]">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>

            <p className="text-[#828282] text-[14px] w-full sm:w-[740px] mx-auto mt-[40px]">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>

            <p className="text-[#4F4F4F] mt-11 text-center">Key Benefits</p>
            <p className="text-[#4F4F4F] font-sans text-[12px] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-[#4F4F4F] font-sans text-[12px] font-normal text-center">Maecenas ullamcorper est et massa mattis condimentum.</p>
            <p className="text-[#4F4F4F] font-sans text-[12px] font-normal text-center">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</p>
            <p className="text-[#4F4F4F] font-sans text-[12px] font-normal text-center">Etiam nec massa et lectus faucibus ornare congue in nunc.</p>
            <p className="text-[#4F4F4F] font-sans text-[12px] font-normal text-center">Mauris eget diam magna, in blandit turpis.</p>
          </div>

          {/* Similar Products */}
          <div>
            <p className="text-[#333333] font-bold text-center mt-32">Similar Products</p>
            <div className="flex flex-wrap justify-center space-x-7 mt-7">
              <Image src="/Shop-section/Fresh Lime.png" alt="fresh lime" height={330} width={200} />
              <Image src="/Shop-section/fresh lime 2.png" alt="fresh lime 2" height={330} width={200} />
              <Image src="/Shop-section/Fresh Lime 3.png" alt="fresh lime 3" height={330} width={200} />
              <Image src="/Shop-section/Fresh Lime.png" alt="fresh lime" height={330} width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;