import React from 'react';
import styles from '../style';
import { Benefit1, Benefit2, Benefit3, Benefit4 } from '../assets';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out" style={{ minHeight: '360px' }}>
    <h4 className="inter font-semibold text-[18px] text-black mb-4">{title}</h4>
    <p className="inter font-normal text-[16px] text-black text-center mb-6">{description}</p>
    <img src={icon} alt={title} className="w-32 h-32 mt-auto mb-auto" />
  </div>
);

const Billing = () => (
  <section className={`${styles.flexCenter} flex-col text-center my-12 max-w-[900px] mx-auto`}>
    <h2 className={`${styles.heading2} mb-5`}>
      Built For The Way You Spend
    </h2>
    <div className="relative yellow__gradient::before">
      <p className={`${styles.paragraph} mb-10`}>
        Whether you're paying rent, splitting the bill, or investing in crypto, do it all from one place.
      </p>
    </div>  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
      <FeatureCard
        icon={Benefit1}
        title="Effortless Integration"
        description="Connect with popular financial services and cryptocurrency exchanges with zero hassle."
      />
      <FeatureCard
        icon={Benefit2}
        title="Security You Can Trust"
        description="State-of-the-art encryption and fraud protection. Your data and assets are guarded round the clock."
      />
      <FeatureCard
        icon={Benefit3}
        title="Rewards That Matter"
        description="Earn points, cashback, and crypto rewards that you can actually use. Because who doesn’t love perks?"
      />
      <FeatureCard
        icon={Benefit4}
        title="Community & Support"
        description="Join a community of savvy financial enthusiasts. Share tips, get advice, and access 24/7 customer support."
      />
    </div>
  </section>
);

export default Billing;
