import styles, { layout } from "../style";
import { Action } from "../assets"; // Ensure this is the correct path to your image asset

const Hero2 = () => {
  return (
    <section id="hero2" className={`flex md:flex-row flex-col items-center ${styles.paddingY} ${styles.paddingX}`}>
      {/* Left side - Image container */}
      <div className="flex-1 flex justify-center items-center relative pr-20">
        <img src={Action} alt="finance illustration" className="max-w-full h-auto" />
      </div>

      {/* Right side - Text container */}
      <div className={`flex-1 ${styles.flexStart} flex-col justify-center pl-8 md:pl-20`}>
        <h1 className={styles.heading2}>
          Get The Financial Control You Deserve
        </h1>
        <p className={`${styles.paragraph} mb-6 pt-2 pb-2`}>
          Ready to take the leap? <br />
          Sign up today and start making smarter financial choices.
        </p>
        {/* Button container */}
        <div className="flex justify-start">
          <button className="get-started-btn inter secondary-Button rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
            Join The Revolution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
