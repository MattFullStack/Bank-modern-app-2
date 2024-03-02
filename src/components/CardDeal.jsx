import React from 'react';
import styles from '../style';

const CardDeal = () => (
  <section className={`${styles.flexCenter} flex-col my-12`}>
    <h2 className={` text-center text-black mt-14 mb-10 ${styles.heading2}`}>
      Hear From Our Users
    </h2>
    <div className=" inter font-normal flex flex-wrap justify-center gap-10">
      <blockquote className="text-center p-4 sm:w-[300px] md:w-[340px] lg:w-[400px] bg-white ">
        <p className={`${styles.paragraph}`}>
          "It's like having a financial advisor in my pocket. I’ve saved so much by just tracking my cryptos and spendings in one place."
        </p>
      </blockquote>
      <blockquote className="text-center p-4 sm:w-[300px] md:w-[340px] lg:w-[400px] bg-white ">
        <p className={`${styles.paragraph}`}>
          "Finally, a finance app that speaks my language. Easy crypto trades and super intuitive budgeting tools!"
        </p>
      </blockquote>
    </div>
  </section>
);

export default CardDeal;
