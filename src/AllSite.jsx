import Bienfaits from "./sections/Bienfaits";
import FirstPart from "./sections/FirstPart";
import Header from "./sections/Header";

const AllSite = () => {
  return (
    <main>
      <section>
        <Header />
      </section>

      <section className="padding-b">
        <FirstPart />
      </section>
      <section className="padding">
        <Bienfaits />
      </section>

    

  
    </main>
  );
};

export default AllSite;
