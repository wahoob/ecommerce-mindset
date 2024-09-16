import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { Subscribe } from "../../components";

import image from "../../assets/imgs/image.png";
import person from "../../assets/imgs/person.png";
import Banner from "../../assets/imgs/Banner.png";
import image2 from "../../assets/imgs/Image2.png";

const About = () => {
  return (
    <>
      <div>
        <div className="3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 flex max-lg:flex-wrap justify-between items-center gap-6 pt-[4.5rem] pb-[7.75rem]">
          <div className="lg:min-w-[20rem] w-full lg:max-w-[33.5rem]">
            <div className="text-white bg-[#2DA5F3] w-32 h-9 flex justify-center items-center text-center text-sm">
              WHO WE ARE
            </div>

            <div className=" text-[40px] font-semibold w-full pt-3 ">
              Kinbo - largest electronics retail shop in the world.
            </div>

            <div className=" text-base w-full text-[#475156] pt-7 ">
              Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
              vestibulum risus, ac tincidunt diam lectus id magna. Praesent
              maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
              dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
            </div>

            <div className=" text-base text-[#191C1F] pt-5 ">
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "#2DB224" }}
              />{" "}
              Great 24/7 customer services.
            </div>

            <div className=" text-base text-[#191C1F] pt-5 ">
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "#2DB224" }}
              />{" "}
              600+ Dedicated employe.{" "}
            </div>

            <div className=" text-base text-[#191C1F] pt-5 ">
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "#2DB224" }}
              />{" "}
              50+ Branches all over the world.{" "}
            </div>

            <div className=" text-base text-[#191C1F] pt-5 ">
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "#2DB224" }}
              />{" "}
              Over 1 Million Electronics Products{" "}
            </div>
          </div>

          <div className="max-lg:w-full">
            <img
              src={image}
              alt="image 1"
              className="lg:max-w-[40.5rem] lg:min-w-[28rem] w-full h-auto"
            />
          </div>
        </div>

        <div className="3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-[4.5rem]">
          <h3 className="text-3xl font-medium text-center mb-9">
            Our core team member
          </h3>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {[...Array(8).keys()].map((n) => (
              <div
                key={n}
                className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0"
              >
                <img src={person} alt="" />
                <div>
                  <div className=" text-[#191C1F] text-base font-medium">
                    Kevin Gilbert{" "}
                  </div>
                  <div className=" text-[#475156] text-sm">
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* //section 3 */}
        <div className="w-full">
          <img src={Banner} alt="banner" className="w-full" />
        </div>

        <div className="flex flex-wrap gap-6 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-[4.5rem]">
          <div className="space-y-4">
            <div className="text-base font-bold">FLASH SALE TODAY</div>

            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-bold">FLASH SALE TODAY</div>

            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-bold">FLASH SALE TODAY</div>

            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-bold">FLASH SALE TODAY</div>

            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-28 border-[1px] border-[#E4E7E9] gap-7 flex justify-center items-center m-2 md:m-0">
              <img src={image2} alt="" />
              <div>
                <div className=" text-[#191C1F] text-base font-medium">
                  Samsung Electronics Samsung Galexy S21 5G
                </div>
                <div className=" text-[#2DA5F3] text-sm">$1,500 </div>
              </div>
            </div>
          </div>
        </div>

        <Subscribe />
      </div>
    </>
  );
};

export default About;
