import { clients } from "../constants";
import styles from "../style";

const Clients = () => (

  <section className={`${styles.flexCenter} sm:pt-12 sm:pb-12`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[200px] w-[200px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
