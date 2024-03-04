import styles, { layout } from "../style";
import { discount, bannerdiscount } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={` flex md:flex-row flex-col  ${styles.paddingY} ${styles.paddingX}`}>
  {/* Conteneur de texte gauche */}
  <div className={`flex-1 ${styles.flexStart} flex-col`}>
        {/* Bouton de réduction */}
        <div className="flex flex-row items-center py-3 px-4 secondary-Button rounded-3xl mb-6">
          <p className="text-sm ml-2 inter font-semibold text-black">
            Get an exclusive <span className="font-bold">30%</span>  discount on premium services for the first month!
          </p>
        </div>

        {/* Titre principal */}
        <div className={styles.heading2}>
          Your ALL-In-One Finance Platform
          <span className="text-xl inter font-regular text-black block mt-5 mb-10">
            Smart. Seamless. Secure.
            <span className="text-xl inter text-black block mt-2 mb-10">The ultimate finance tool for the digital generation.</span>
          </span>
        </div>

        {/* Bouton démarrage */}
        <button className="get-started-btn inter secondary-Button  rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Get Started
        </button>


       </div>
      {/* Conteneur d'image droite */}
      <div className="flex-2 flex justify-center ml-4 items-center relative w-1/2 ">
        <img src={bannerdiscount} alt="finance platform" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
