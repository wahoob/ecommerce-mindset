import { Link } from "react-router-dom";
import { AppStore, GooglePlay, Logo, RightArrow } from "../utils/icons.util";
import Tag from "./Tag";

const tags = [
  "Game",
  "iPhone",
  "TV",
  "Asus Laptops",
  "Macbook",
  "SSD",
  "Graphics",
  "Power Bank",
  "Smart TV",
  "Speaker",
  "Tablet",
  "Microwave",
  "Samsung",
];

const Footer = () => {
  return (
    <footer className="bg-[#191C1F]">
      <div className="flex flex-wrap gap-6 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-[72px]">
        <div className="w-[312px]">
          <div className="flex items-center gap-2 text-[#FA8232] mb-6">
            <Logo />
            <h1 className="text-[32px] text-white font-bold">CLICON</h1>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-[#77878F] text-sm font-normal">
                Customer Supports
              </p>
              <p className="text-lg text-white font-medium">(629) 555-0129</p>
            </div>

            <div>
              <p className="text-[#ADB7BC]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>

            <div>
              <p className="text-white">info@kinbo.com</p>
            </div>
          </div>
        </div>

        <div className="w-[200px]">
          <h3 className="mb-3 text-white font-medium">TOP CATEGORY</h3>

          <div>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Computer & Laptop
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              SmartPhone
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Headphone
            </p>
            <div className="py-[6px] flex gap-2 items-center">
              <div className="bg-[#EBC80C] w-6 h-[2px]" />
              <p className="text-white text-sm font-medium">Accessories</p>
            </div>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Camera & Photo
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              TV & Homes
            </p>
            <div className="py-[6px] flex gap-2 items-center">
              <p className="text-[#EBC80C] text-sm font-medium">
                Browse All Product
              </p>
              <div className="text-[#EBC80C] size-5">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[200px]">
          <h3 className="mb-3 text-white font-medium">QUICK LINKS</h3>

          <div>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Shop Product
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Shoping Cart
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Wishlist
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Compare
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Track Order
            </p>
            <p className="text-[#929FA5] py-[6px] text-sm font-medium">
              Customer Help
            </p>
            <Link
              to="/about"
              className="text-[#929FA5] py-[6px] text-sm font-medium"
            >
              About Us
            </Link>
          </div>
        </div>

        <div className="w-[200px]">
          <h3 className="mb-[18px] text-white font-medium">DOWNLOAD APP</h3>

          <div className="space-y-3">
            <div className="bg-[#303639] py-4 px-5 flex gap-4 text-white">
              <GooglePlay />
              <div className="space-y-1 font-inter">
                <p className="text-[11px] font-normal">Get it now</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </div>

            <div className="bg-[#303639] py-4 px-5 flex gap-4 text-white">
              <AppStore />
              <div className="space-y-1 font-inter">
                <p className="text-[11px] font-normal">Get it now</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[312px]">
          <h3 className="mb-3 text-white font-medium">POPULAR TAG</h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-[#303639]">
        <p className="text-[#ADB7BC] font-sm font-normal text-center">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
