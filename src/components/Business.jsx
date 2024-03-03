import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] pt-20 ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[74px] h-[84px] ${styles.flexCenter}`}>
      <img src={icon} alt={title} className="" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="inter font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="inter font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={` ${layout.sectionInfo}`}>
    <h2 className={styles.heading2}>
      Welcome to Simplified Financial Freedom
    </h2>
    <p className="text-xl inter text-black block mt-5 mb-10 max-w-[470px]">
      Our platform integrates your bank accounts, credit cards, and cryptocurrency wallets in one easy-to-use dashboard.
    </p>
      {/* Add a Button here if needed */}
    </div>

    <div className={`${layout.sectionImg} inter flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
