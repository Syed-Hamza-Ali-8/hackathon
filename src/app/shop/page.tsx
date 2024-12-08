import Image from "next/image"

const Shop = () => {
  return (
    <div>
      <div>
        <Image className="mt-[300px] ml-[300px] round-[6px] h-[400px] hover:cursor-pointer" src="/Shop-section/Rectangle 8883.png" alt="Shop list 1" height={206} width={300} />

        <div className="mt-[-395px] space-y-10 hover:cursor-pointer">
          <Image className=" ml-[200px]" src="/Shop-section/Rectangle 8884.png" alt="Shop list 2" height={132} width={70} />

          <Image className=" ml-[200px]" src="/Shop-section/Rectangle 8885.png" alt="Shop list 3" height={132} width={70} />

          <Image className="ml-[200px]" src="/Shop-section/Rectangle 8886.png" alt="Shop list 4" height={132} width={70} />

          <Image className="ml-[200px]" src="/Shop-section/Rectangle 8887.png" alt="Shop list 5" height={132} width={70} />
        </div>

        <div className="text-white bg-[#FF9F0D] w-14 font-normal text-[10px] px-2 py-2 mt-[-400px] ml-[610px] hover:cursor-pointer">In stock</div>

        <h2 className="font-sans text-[30px] font-bold ml-[610px]">Yummy Chicken Chup</h2>
        <p className="font-normal text-[15px] w-[450px] ml-[615px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque quos qui quidem deserunt iste blanditiis, beatae aliquam perspiciatis aliquid magnam tenetur ut consequuntur ducimus! Ipsa similique commodi, perferendis sit vero qui, blanditiis odit nisi excepturi, maxime itaque labore eligendi!</p>

        <h4 className="font-sans font-bold text-[20px] ml-[615px] mt-[35px]">54.00$</h4>

        <Image className="ml-[614px]" src="/Shop-section/Star.png" alt="Give rating" height={26} width={80} />

        <p className="text-[#828282] text-[12px] w-28 ml-[710px] mt-[-15px]">5.0 Rating</p>
        <p className="text-[#828282] text-[12px] w-28 ml-[782px] mt-[-18px]">22 Review</p>

        <p className="font-normal text-[13px] ml-[615px] leading-[35px]">Dictum/cursus/Risus</p>

        <Image className="ml-[615px]" src="/Shop-section/count.png" alt="counter" height={50} width={120} />

        <Image className="mt-[-33px] ml-[750px] hover:cursor-pointer" src="/Shop-section/Cart.png" alt="Add to cart" height={50} width={130} />

        <Image className="mt-[50px] ml-[614px] hover:cursor-pointer" src="/Shop-section/Wishlist.png" alt="Add to wishlist" height={26} width={170} />

        <p className="text-[11px] font-sans leading-[30px] w-32 ml-[617px]">Category: Pizza</p>
        <p className="text-[11px] font-sans leading-[22px] w-32 ml-[617px]">Tag: Our Shop</p>

        <p className="text-[11px] font-sans w-32 ml-[617px]">Share : </p>
        <div className="flex w-4 space-x-2 ml-[655px] mt-[-15px] hover:cursor-pointer">
          <Image src="/Shop-section/Vector.png" alt="icon" height={24} width={24} />
          <Image src="/Shop-section/Facebook.png" alt="icon" height={24} width={24} />
          <Image src="/Shop-section/Twitter.png" alt="icon" height={24} width={24} />
          <Image src="/Shop-section/Circle.png" alt="icon" height={24} width={24} />
          <Image src="/Shop-section/Instagram.png" alt="icon" height={24} width={24} />
        </div>

        <div>
          <Image className="mt-24 ml-[195px]" src="/Shop-section/Description.png" alt="description" height={50} width={110} />
          <p className="text-[14px] font-sans ml-[320px] mt-[-25px]">Reviews (24)</p>
          <p className="text-[#828282] text-[14px] w-[740px] mt-[40px] ml-[195px]">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>

          <p className="text-[#828282] text-[14px] w-[740px] mt-[40px] ml-[195px]">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>

          <p className="text-4F4F4F mt-11 ml-48">Key Benefits</p>
          <p className="text-4F4F4F font-sans text-[12px] font-normal ml-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-4F4F4F font-sans text-[12px] font-normal ml-48">Maecenas ullamcorper est et massa mattis condimentum.</p>
          <p className="text-4F4F4F font-sans text-[12px] font-normal ml-48">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</p>
          <p className="text-4F4F4F font-sans text-[12px] font-normal ml-48">Etiam nec massa et lectus faucibus ornare congue in nunc.</p>
          <p className="text-4F4F4F font-sans text-[12px] font-normal ml-48">Mauris eget diam magna, in blandit turpis.</p>
        </div>

        <div>
          <p className="text-[#333333] font-bold mt-32 ml-[180px]">Similar Products</p>
          <div className="flex space-x-7 mt-7 ml-[180px]">
            <Image src="/Shop-section/Fresh Lime.png" alt="fresh lime" height={330} width={200} />
            <Image src="/Shop-section/fresh lime 2.png" alt="fresh lime 2" height={330} width={200} />
            <Image src="/Shop-section/Fresh Lime 3.png" alt="fresh lime 3" height={330} width={200} />
            <Image src="/Shop-section/Fresh Lime.png" alt="fresh lime" height={330} width={200} />
          </div> <br /><br /><br />
        </div>

      </div>
    </div>
  )
}

export default Shop;