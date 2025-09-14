import React from "react";
import travel from "../assets/travel.png";
import con from "../assets/container blog.jpg";
import fam from "../assets/family blog.jpg";
import cal from "../assets/calendar.png";
import arr from "../assets/read arrow.png";
import blog4 from "../assets/blog.jpg";
import boat from "../assets/boat blog.jpg";
import med from "../assets/med blog.jpg";
import man from "../assets/man blog.png";
import govt from "../assets/government image.jpg";
import agric from "../assets/agriculture blog.jpg";

const blogcompo = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-9 -mt-5 md:mt-6 md:max-w-[1238.03px] mx-auto">
        {/* Card 1 */}
        <div className="w-[307px] md:w-[388.68px]  md:mt-0 mt-11 mx-auto left-element">
          {/* Mobile Image */}
          <img
            src={travel}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={travel}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Top Travel Insurance Plans For Nigerians
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Iris</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Dec 12, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Asides the excitement that comes with planning for a trip abroad
              and trying to figure out your itineraries, one important aspect
              you should never...
            </p>
          </div>

          <button className="pop mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto center-element">
          {/* Mobile Image */}
          <img
            src={con}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={con}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Get Goods in Transit Insurance: Protect Your Cargo While
              Shipping...
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Barry</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">April 8, 2025</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              Shipping valuable items across Nigeria can be risky business.
              Whether you're sending products to customers or moving inventory
              between...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto right-element">
          {/* Mobile Image */}
          <img
            src={fam}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={fam}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              330 Billion Reasons to Smile: Leadway’s Promise to You
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Klaus</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Sep 13, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Have you ever made a promise to someone and felt really good when
              you kept it? Maybe you promised your child you would take them for
              a fun outing, or...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5  flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-9 -mt-5 md:mt-6 md:max-w-[1238.03px] mx-auto">
        {/* Card 1 */}
        <div className="w-[307px] md:w-[388.68px]  md:mt-0 mt-11 mx-auto left-element">
          {/* Mobile Image */}
          <img
            src={blog4}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={blog4}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Top Travel Insurance Plans For Nigerians
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Iris</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Dec 12, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Asides the excitement that comes with planning for a trip abroad
              and trying to figure out your itineraries, one important aspect
              you should never...
            </p>
          </div>

          <button className="pop mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto center-element">
          {/* Mobile Image */}
          <img
            src={boat}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={boat}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Get Goods in Transit Insurance: Protect Your Cargo While
              Shipping...
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Barry</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">April 8, 2025</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              Shipping valuable items across Nigeria can be risky business.
              Whether you're sending products to customers or moving inventory
              between...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto right-element">
          {/* Mobile Image */}
          <img
            src={med}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={med}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              330 Billion Reasons to Smile: Leadway’s Promise to You
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Klaus</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Sep 13, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Have you ever made a promise to someone and felt really good when
              you kept it? Maybe you promised your child you would take them for
              a fun outing, or...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5  flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-9 -mt-5 md:mt-6 md:max-w-[1238.03px] mx-auto">
        {/* Card 1 */}
        <div className="w-[307px] md:w-[388.68px]  md:mt-0 mt-11 mx-auto left-element">
          {/* Mobile Image */}
          <img
            src={man}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={man}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Leadway Assurance Announces Strategic Leadership Transitions
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Lois</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Jan 4, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              (Lagos, Nigeria – December 29, 2023) Leadway Assurance Company
              Limited, a foremost player in the Nigerian insurance sector, today
              announces a...
            </p>
          </div>

          <button className="pop mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto center-element">
          {/* Mobile Image */}
          <img
            src={agric}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={agric}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Are you a sponsor of Agri-tech platforms? Here’s the level of
              Leadw..
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Lane</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Feb. 9, 2020</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              The rapid growth and innovation of Information Technology are
              disrupting how industries and businesses are structured and
              operated. There is...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto right-element">
          {/* Mobile Image */}
          <img
            src={govt}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={govt}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Leadway’s Total Premium hits N104.4 bn.  
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Allen</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Apr 6, 2023</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Friday, March 31, 2023 – Lagos, Nigeria: Leadway becomes the first
              Nigerian company to cross 3-digit billion mark with Total premium
              collection of N104.4...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5  flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default blogcompo;
