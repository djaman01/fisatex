import Bienfaits from "./sections/Bienfaits";
import FirstPart from "./sections/FirstPart";
import Header from "./sections/Header";
import VotreGant from "./sections/VotreGant";



const AllSite = () => {
  return (
    <main>
      <section>
        <Header />
      </section>

      <section className="padding-b">
        <FirstPart />
      </section>
      <section className="padding padding-b">
        <Bienfaits />
      </section>
      <section className="padding-b">
        <VotreGant />
      </section>

    

  
    </main>
  );
};

export default AllSite;
