import React from 'react';
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} flex-col w-full bg-white text-black`}>
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-16 py-6">
      {footerLinks.map((footerColumn) => (
        <div key={footerColumn.title} className="flex flex-col items-center sm:items-start">
          <h4 className=" inter font-semibold text-[18px] leading-[27px] mb-4">
            {footerColumn.title}
          </h4>
          {footerColumn.links.map((link, index) => (
            <a 
              key={link.name}
              href={link.link}
              className="inter font-light text-[16px] leading-[24px] hover:text-gray-700 mb-4 last:mb-0 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          {/* Check if it is the Social Media column and render the icons */}
          {footerColumn.title === 'Social Media' && (
            <div className="flex justify-center mt-4">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="w-full text-center py-6 border-t border-gray-200 ">
      <p className=" inter font-light text-[14px] leading-[24px]">
        Copyright © 2024 | built with React & Next.js, TypeScript, Tailwind CSS, Vercel hosting. <br />
        All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
